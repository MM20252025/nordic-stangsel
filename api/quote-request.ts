declare const process: { env: Record<string, string | undefined> };
declare const console: { error: (...args: unknown[]) => void };
declare function fetch(input: string, init?: unknown): Promise<FetchResponse>;
declare function encodeURIComponent(value: string): string;

type FetchResponse = {
  ok: boolean;
  status: number;
  statusText: string;
  json: () => Promise<unknown>;
  text: () => Promise<string>;
};

const RECIPIENT_EMAIL = "info@nordicstangsel.com";
const BLOCKED_DOMAIN = "nordicstangsel.se";
const DEFAULT_FROM_EMAIL = "Nordic Stängsel <offerter@nordicstangsel.com>";
const PIPEDRIVE_OWNER_NAME = "Marcin Makarewicz";
const PIPEDRIVE_SOURCE = "Hemsida";
const PIPEDRIVE_ACTIVITY_SUBJECT = "Kontakta ny kund från hemsidan";

type QuoteRequestBody = {
  name?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
  attachmentCount?: number;
  imageNames?: string[];
};

type NormalizedQuoteRequest = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  attachmentCount: number;
  imageNames: string[];
};

type VercelRequest = {
  method?: string;
  body?: QuoteRequestBody | string;
};

type VercelResponse = {
  status: (statusCode: number) => VercelResponse;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
};

type PipedriveClient = {
  get: (path: string, query?: Record<string, string | number | boolean>) => Promise<unknown>;
  post: (path: string, body: Record<string, unknown>) => Promise<unknown>;
};

class PipedriveError extends Error {
  constructor(message: string, public details?: unknown) {
    super(message);
  }
}

function getBody(req: VercelRequest): QuoteRequestBody {
  if (typeof req.body !== "string") {
    return req.body ?? {};
  }

  try {
    return JSON.parse(req.body) as QuoteRequestBody;
  } catch {
    return {};
  }
}

function hasValue(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function optionalValue(value: string | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

function isBlockedAddress(value: string | undefined) {
  return typeof value === "string" && value.toLowerCase().includes(BLOCKED_DOMAIN);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function toNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function buildAttachmentText(body: NormalizedQuoteRequest) {
  if (body.attachmentCount <= 0) {
    return "Inga bilder valdes i formuläret.";
  }

  const names = body.imageNames.length > 0 ? ` Filnamn: ${body.imageNames.join(", ")}.` : "";
  return `${body.attachmentCount} bild(er) valdes i formuläret.${names} Be kunden skicka bilderna som svar eller separat bilaga.`;
}

function buildText(body: NormalizedQuoteRequest) {
  return [
    `Namn: ${body.name}`,
    `Telefon: ${body.phone}`,
    `E-post: ${body.email}`,
    `Företag: ${body.companyName || "Ej angivet"}`,
    `Typ av projekt: ${body.projectType}`,
    `Källa: ${PIPEDRIVE_SOURCE}`,
    "",
    "Projektbeskrivning:",
    body.message,
    "",
    `Bifogade bilder: ${buildAttachmentText(body)}`,
  ].join("\n");
}

function buildHtml(body: NormalizedQuoteRequest) {
  return `
    <h2>Ny offertförfrågan från nordicstangsel.com</h2>
    <p><strong>Namn:</strong> ${escapeHtml(body.name)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(body.phone)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(body.email)}</p>
    <p><strong>Företag:</strong> ${escapeHtml(body.companyName || "Ej angivet")}</p>
    <p><strong>Typ av projekt:</strong> ${escapeHtml(body.projectType)}</p>
    <p><strong>Källa:</strong> ${PIPEDRIVE_SOURCE}</p>
    <p><strong>Projektbeskrivning:</strong></p>
    <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
    <p><strong>Bifogade bilder:</strong> ${escapeHtml(buildAttachmentText(body))}</p>
  `;
}

async function sendWithResend(body: NormalizedQuoteRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const from = process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [RECIPIENT_EMAIL],
      reply_to: body.email,
      subject: `Offertförfrågan - ${body.projectType}`,
      text: buildText(body),
      html: buildHtml(body),
    }),
  });

  return response.ok;
}

function getPipedriveBaseUrl() {
  const rawDomain = process.env.PIPEDRIVE_COMPANY_DOMAIN?.trim();

  if (!rawDomain) {
    return null;
  }

  const withoutProtocol = rawDomain.replace(/^https?:\/\//i, "").replace(/\/+$/g, "");
  const host = withoutProtocol.includes(".") ? withoutProtocol : `${withoutProtocol}.pipedrive.com`;

  return `https://${host}/api/v1`;
}

function buildQuery(apiToken: string, query?: Record<string, string | number | boolean>) {
  const parts = [`api_token=${encodeURIComponent(apiToken)}`];

  for (const [key, value] of Object.entries(query ?? {})) {
    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  }

  return parts.join("&");
}

function createPipedriveClient(): PipedriveClient | null {
  const apiToken = process.env.PIPEDRIVE_API_TOKEN?.trim() ?? "";
  const baseUrl = getPipedriveBaseUrl() ?? "";

  if (!apiToken || !baseUrl) {
    return null;
  }

  async function request(path: string, init: { method: string; body?: Record<string, unknown>; query?: Record<string, string | number | boolean> }) {
    const response = await fetch(`${baseUrl}${path}?${buildQuery(apiToken, init.query)}`, {
      method: init.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: init.body ? JSON.stringify(init.body) : undefined,
    });

    const payload = await response.json().catch(async () => ({ raw: await response.text().catch(() => "") }));

    if (!response.ok || (isRecord(payload) && payload.success === false)) {
      throw new PipedriveError(`Pipedrive API request failed: ${init.method} ${path}`, {
        status: response.status,
        statusText: response.statusText,
        payload,
      });
    }

    return payload;
  }

  return {
    get: (path, query) => request(path, { method: "GET", query }),
    post: (path, body) => request(path, { method: "POST", body }),
  };
}

function extractSearchItemId(response: unknown) {
  if (!isRecord(response) || !isRecord(response.data)) {
    return null;
  }

  const items = Array.isArray(response.data.items) ? response.data.items : Array.isArray(response.data) ? response.data : [];

  for (const entry of items) {
    if (!isRecord(entry)) continue;
    const directId = toNumber(entry.id);
    if (directId) return directId;

    if (isRecord(entry.item)) {
      const itemId = toNumber(entry.item.id);
      if (itemId) return itemId;
    }
  }

  return null;
}

function extractFirstUserId(response: unknown) {
  if (!isRecord(response)) {
    return null;
  }

  const data = response.data;
  const users = Array.isArray(data) ? data : isRecord(data) ? [data] : [];

  for (const user of users) {
    if (!isRecord(user)) continue;
    const name = typeof user.name === "string" ? user.name.toLowerCase() : "";
    const id = toNumber(user.id);

    if (id && user.active_flag !== false && name.includes(PIPEDRIVE_OWNER_NAME.toLowerCase())) {
      return id;
    }
  }

  for (const user of users) {
    if (!isRecord(user)) continue;
    const id = toNumber(user.id);
    if (id && user.active_flag !== false) return id;
  }

  return null;
}

function extractCreatedId(response: unknown) {
  return isRecord(response) && isRecord(response.data) ? toNumber(response.data.id) : null;
}

function extractCreatedLeadId(response: unknown) {
  if (!isRecord(response) || !isRecord(response.data)) {
    return null;
  }

  const id = response.data.id;
  return typeof id === "string" && id.length > 0 ? id : null;
}

async function getOwnerId(client: PipedriveClient) {
  const foundUsers = await client.get("/users/find", { term: PIPEDRIVE_OWNER_NAME });
  const foundId = extractFirstUserId(foundUsers);

  if (foundId) {
    return foundId;
  }

  const currentUser = await client.get("/users/me");
  const currentId = extractFirstUserId(currentUser);

  if (currentId) {
    return currentId;
  }

  throw new PipedriveError(`Could not find Pipedrive owner ${PIPEDRIVE_OWNER_NAME}.`, foundUsers);
}

async function findOrCreateOrganization(client: PipedriveClient, companyName: string, ownerId: number) {
  if (!companyName) {
    return null;
  }

  const search = await client.get("/organizations/search", {
    term: companyName,
    fields: "name",
    exact_match: true,
    limit: 1,
  });
  const existingId = extractSearchItemId(search);

  if (existingId) {
    return existingId;
  }

  const created = await client.post("/organizations", { name: companyName, owner_id: ownerId });
  const createdId = extractCreatedId(created);

  if (!createdId) {
    throw new PipedriveError("Pipedrive organization was created without an id.", created);
  }

  return createdId;
}

async function findPerson(client: PipedriveClient, body: NormalizedQuoteRequest) {
  const searchByEmail = await client.get("/persons/search", {
    term: body.email,
    fields: "email",
    exact_match: true,
    limit: 1,
  });
  const emailMatch = extractSearchItemId(searchByEmail);

  if (emailMatch) {
    return emailMatch;
  }

  const searchByPhone = await client.get("/persons/search", {
    term: body.phone,
    fields: "phone",
    exact_match: true,
    limit: 1,
  });

  return extractSearchItemId(searchByPhone);
}

async function findOrCreatePerson(client: PipedriveClient, body: NormalizedQuoteRequest, ownerId: number, organizationId: number | null) {
  const existingId = await findPerson(client, body);

  if (existingId) {
    return existingId;
  }

  const created = await client.post("/persons", {
    name: body.name,
    owner_id: ownerId,
    org_id: organizationId ?? undefined,
    email: [{ value: body.email, primary: true, label: "work" }],
    phone: [{ value: body.phone, primary: true, label: "mobile" }],
  });
  const createdId = extractCreatedId(created);

  if (!createdId) {
    throw new PipedriveError("Pipedrive person was created without an id.", created);
  }

  return createdId;
}

function buildLeadNote(body: NormalizedQuoteRequest) {
  return [
    `<strong>namn:</strong> ${escapeHtml(body.name)}`,
    `<strong>telefon:</strong> ${escapeHtml(body.phone)}`,
    `<strong>e-post:</strong> ${escapeHtml(body.email)}`,
    `<strong>företag:</strong> ${escapeHtml(body.companyName || "Ej angivet")}`,
    `<strong>projekttyp:</strong> ${escapeHtml(body.projectType)}`,
    `<strong>källa:</strong> ${PIPEDRIVE_SOURCE}`,
    `<strong>bifogade bilder:</strong> ${escapeHtml(buildAttachmentText(body))}`,
    "",
    `<strong>beskrivning:</strong><br>${escapeHtml(body.message).replace(/\n/g, "<br>")}`,
  ].join("<br>");
}

async function createPipedriveLead(body: NormalizedQuoteRequest) {
  const client = createPipedriveClient();

  if (!client) {
    throw new PipedriveError("Pipedrive integration is missing PIPEDRIVE_API_TOKEN or PIPEDRIVE_COMPANY_DOMAIN.");
  }

  const ownerId = await getOwnerId(client);
  const organizationId = await findOrCreateOrganization(client, body.companyName, ownerId);
  const personId = await findOrCreatePerson(client, body, ownerId, organizationId);
  const lead = await client.post("/leads", {
    title: `${body.projectType} - ${body.name}`,
    owner_id: ownerId,
    person_id: personId,
    organization_id: organizationId ?? undefined,
  });
  const leadId = extractCreatedLeadId(lead);

  if (!leadId) {
    throw new PipedriveError("Pipedrive lead was created without an id.", lead);
  }

  await client.post("/notes", {
    lead_id: leadId,
    content: buildLeadNote(body),
  });

  await client.post("/activities", {
    subject: PIPEDRIVE_ACTIVITY_SUBJECT,
    type: "task",
    user_id: ownerId,
    lead_id: leadId,
    person_id: personId,
    org_id: organizationId ?? undefined,
    note: `Ny förfrågan från hemsidan: ${body.projectType}`,
  });
}

function logPipedriveError(error: unknown) {
  if (error instanceof PipedriveError) {
    console.error("Pipedrive lead sync failed", { message: error.message, details: error.details });
    return;
  }

  console.error("Pipedrive lead sync failed", error);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).json({});
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (isBlockedAddress(process.env.QUOTE_RECIPIENT_EMAIL) || isBlockedAddress(process.env.QUOTE_FROM_EMAIL)) {
    return res.status(500).json({ error: "Blocked Nordic Stängsel .se mail configuration." });
  }

  const body = getBody(req);

  if (!hasValue(body.name) || !hasValue(body.phone) || !hasValue(body.email) || !hasValue(body.projectType) || !hasValue(body.message)) {
    return res.status(400).json({ error: "Missing one or more required quote request fields." });
  }

  const normalizedBody: NormalizedQuoteRequest = {
    name: body.name?.trim() ?? "",
    companyName: optionalValue(body.companyName),
    phone: body.phone?.trim() ?? "",
    email: body.email?.trim() ?? "",
    projectType: body.projectType?.trim() ?? "",
    message: body.message?.trim() ?? "",
    attachmentCount: Number.isFinite(body.attachmentCount) ? Number(body.attachmentCount) : 0,
    imageNames: Array.isArray(body.imageNames) ? body.imageNames.filter(hasValue).map((name) => name.trim()).slice(0, 10) : [],
  };

  const sent = await sendWithResend(normalizedBody);

  if (!sent) {
    return res.status(503).json({
      error: "Quote email delivery is not configured or failed.",
      recipient: RECIPIENT_EMAIL,
    });
  }

  try {
    await createPipedriveLead(normalizedBody);
  } catch (error) {
    logPipedriveError(error);
  }

  return res.status(200).json({ status: "sent", recipient: RECIPIENT_EMAIL });
}
