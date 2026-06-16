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

type QuoteFile =
  | string
  | {
      name?: string;
      filename?: string;
      originalname?: string;
      size?: number;
      type?: string;
      mimetype?: string;
    };

type QuoteRequestBody = {
  name?: string;
  companyName?: string;
  company?: string;
  organization?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
  files?: QuoteFile[];
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
  files: string[];
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

type PipedriveSourceField = {
  key: string;
  value: string | number;
};

class PipedriveError extends Error {
  constructor(message: string, public details?: unknown) {
    super(message);
  }
}

class EmailDeliveryError extends Error {
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

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function fileToText(file: QuoteFile) {
  if (typeof file === "string") {
    return file.trim();
  }

  const name = optionalValue(file.name) || optionalValue(file.filename) || optionalValue(file.originalname) || "Namnlös fil";
  const type = optionalValue(file.type) || optionalValue(file.mimetype);
  const details = [type, typeof file.size === "number" && Number.isFinite(file.size) ? `${file.size} bytes` : ""]
    .filter(hasValue)
    .join(", ");

  return details ? `${name} (${details})` : name;
}

function normalizeFiles(body: QuoteRequestBody) {
  if (Array.isArray(body.files)) {
    return body.files.map(fileToText).filter(hasValue).slice(0, 20);
  }

  if (Array.isArray(body.imageNames)) {
    return body.imageNames.filter(hasValue).map((name) => name.trim()).slice(0, 20);
  }

  const count = Number.isFinite(body.attachmentCount) ? Number(body.attachmentCount) : 0;
  return count > 0 ? [`${count} fil(er) valdes i formuläret.`] : [];
}

function buildFilesText(body: NormalizedQuoteRequest) {
  if (body.files.length === 0) {
    return "Inga filer skickades i formuläret.";
  }

  return body.files.join(", ");
}

function buildDescription(body: NormalizedQuoteRequest) {
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
    `Filer: ${buildFilesText(body)}`,
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
    <p><strong>Källa:</strong> ${escapeHtml(PIPEDRIVE_SOURCE)}</p>
    <p><strong>Projektbeskrivning:</strong></p>
    <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
    <p><strong>Filer:</strong> ${escapeHtml(buildFilesText(body))}</p>
  `;
}

function buildCustomerConfirmationText(body: NormalizedQuoteRequest) {
  return [
    `Hej ${body.name},`,
    "",
    "Tack för din förfrågan till Nordic Stängsel.",
    "",
    "Vi har tagit emot dina uppgifter och kommer att gå igenom ditt projekt så snart som möjligt. En person från vårt team återkommer till dig med nästa steg, vanligtvis via telefon eller e-post.",
    "",
    `Projekt: ${body.projectType}`,
    body.companyName ? `Företag: ${body.companyName}` : "",
    "",
    "Om du vill komplettera din förfrågan med ritningar, bilder eller ytterligare information kan du svara direkt på detta meddelande.",
    "",
    "Med vänliga hälsningar,",
    "Nordic Stängsel",
    "info@nordicstangsel.com",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

function buildCustomerConfirmationHtml(body: NormalizedQuoteRequest) {
  return `
    <div style="font-family: Arial, sans-serif; color: #1f2933; line-height: 1.6; max-width: 640px;">
      <p>Hej ${escapeHtml(body.name)},</p>
      <p>Tack för din förfrågan till <strong>Nordic Stängsel</strong>.</p>
      <p>Vi har tagit emot dina uppgifter och kommer att gå igenom ditt projekt så snart som möjligt. En person från vårt team återkommer till dig med nästa steg, vanligtvis via telefon eller e-post.</p>
      <p><strong>Projekt:</strong> ${escapeHtml(body.projectType)}${body.companyName ? `<br><strong>Företag:</strong> ${escapeHtml(body.companyName)}` : ""}</p>
      <p>Om du vill komplettera din förfrågan med ritningar, bilder eller ytterligare information kan du svara direkt på detta meddelande.</p>
      <p>Med vänliga hälsningar,<br><strong>Nordic Stängsel</strong><br><a href="mailto:${RECIPIENT_EMAIL}">${RECIPIENT_EMAIL}</a></p>
    </div>
  `;
}

async function sendResendEmail(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new EmailDeliveryError("Email delivery is missing RESEND_API_KEY.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.json().catch(async () => ({ raw: await response.text().catch(() => "") }));
    throw new EmailDeliveryError(`Resend returned ${response.status} ${response.statusText}.`, details);
  }
}

async function sendWithResend(body: NormalizedQuoteRequest) {
  const from = process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  await sendResendEmail({
    from,
    to: [RECIPIENT_EMAIL],
    reply_to: body.email,
    subject: `Offertförfrågan - ${body.projectType}`,
    text: buildDescription(body),
    html: buildHtml(body),
  });
}

async function sendCustomerConfirmationWithResend(body: NormalizedQuoteRequest) {
  const from = process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  await sendResendEmail({
    from,
    to: [body.email],
    reply_to: RECIPIENT_EMAIL,
    subject: "Tack för din förfrågan till Nordic Stängsel",
    text: buildCustomerConfirmationText(body),
    html: buildCustomerConfirmationHtml(body),
  });
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

function createPipedriveClient(): PipedriveClient {
  const apiToken = process.env.PIPEDRIVE_API_TOKEN?.trim() ?? "";
  const baseUrl = getPipedriveBaseUrl() ?? "";

  if (!apiToken || !baseUrl) {
    throw new PipedriveError("Pipedrive integration is missing PIPEDRIVE_API_TOKEN or PIPEDRIVE_COMPANY_DOMAIN.");
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
    const name = typeof user.name === "string" ? normalizeText(user.name) : "";
    const id = toNumber(user.id);

    if (id && user.active_flag !== false && name.includes(normalizeText(PIPEDRIVE_OWNER_NAME))) {
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

function extractSourceField(response: unknown): PipedriveSourceField | null {
  const configuredKey = process.env.PIPEDRIVE_SOURCE_FIELD_KEY?.trim();

  if (configuredKey) {
    return { key: configuredKey, value: PIPEDRIVE_SOURCE };
  }

  if (!isRecord(response) || !Array.isArray(response.data)) {
    return null;
  }

  for (const field of response.data) {
    if (!isRecord(field) || typeof field.key !== "string" || typeof field.name !== "string") continue;

    const fieldName = normalizeText(field.name);
    const looksLikeSourceField = fieldName === "källa" || fieldName.includes("källa") || fieldName.includes("source");
    if (!looksLikeSourceField) continue;

    if (Array.isArray(field.options)) {
      for (const option of field.options) {
        if (!isRecord(option) || typeof option.label !== "string") continue;
        if (normalizeText(option.label) === normalizeText(PIPEDRIVE_SOURCE)) {
          const optionId = typeof option.id === "number" || typeof option.id === "string" ? option.id : option.label;
          return { key: field.key, value: optionId };
        }
      }
    }

    return { key: field.key, value: PIPEDRIVE_SOURCE };
  }

  return null;
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

function buildDealNote(body: NormalizedQuoteRequest) {
  return [
    `<strong>namn:</strong> ${escapeHtml(body.name)}`,
    `<strong>telefon:</strong> ${escapeHtml(body.phone)}`,
    `<strong>e-post:</strong> ${escapeHtml(body.email)}`,
    `<strong>företag:</strong> ${escapeHtml(body.companyName || "Ej angivet")}`,
    `<strong>projekttyp:</strong> ${escapeHtml(body.projectType)}`,
    `<strong>källa:</strong> ${escapeHtml(PIPEDRIVE_SOURCE)}`,
    `<strong>filer:</strong> ${escapeHtml(buildFilesText(body))}`,
    "",
    `<strong>beskrivning:</strong><br>${escapeHtml(body.message).replace(/\n/g, "<br>")}`,
  ].join("<br>");
}

async function createPipedriveDeal(body: NormalizedQuoteRequest) {
  const client = createPipedriveClient();
  const ownerId = await getOwnerId(client);
  const organizationId = await findOrCreateOrganization(client, body.companyName, ownerId);
  const personId = await findOrCreatePerson(client, body, ownerId, organizationId);
  const sourceField = extractSourceField(await client.get("/dealFields", { limit: 500 }));
  const stageId = Number(process.env.PIPEDRIVE_DEAL_STAGE_ID);
  const dealPayload: Record<string, unknown> = {
    title: `${body.projectType} - ${body.name}`,
    user_id: ownerId,
    person_id: personId,
    org_id: organizationId ?? undefined,
  };

  if (Number.isFinite(stageId) && stageId > 0) {
    dealPayload.stage_id = stageId;
  }

  if (sourceField) {
    dealPayload[sourceField.key] = sourceField.value;
  }

  const deal = await client.post("/deals", dealPayload);
  const dealId = extractCreatedId(deal);

  if (!dealId) {
    throw new PipedriveError("Pipedrive deal was created without an id.", deal);
  }

  await client.post("/notes", {
    deal_id: dealId,
    content: buildDealNote(body),
  });

  await client.post("/activities", {
    subject: PIPEDRIVE_ACTIVITY_SUBJECT,
    type: "task",
    user_id: ownerId,
    deal_id: dealId,
    person_id: personId,
    org_id: organizationId ?? undefined,
    note: `Ny förfrågan från hemsidan: ${body.projectType}`,
  });

  return dealId;
}

function logPipedriveError(error: unknown) {
  if (error instanceof PipedriveError) {
    console.error("Pipedrive deal sync failed", { message: error.message, details: error.details });
    return;
  }

  console.error("Pipedrive deal sync failed", error);
}

function logEmailError(error: unknown) {
  if (error instanceof EmailDeliveryError) {
    console.error("Quote email delivery failed", { message: error.message, details: error.details, recipient: RECIPIENT_EMAIL });
    return;
  }

  console.error("Quote email delivery failed", error);
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
    console.error("Quote request blocked because mail configuration contains nordicstangsel.se", {
      hasQuoteRecipientEmail: hasValue(process.env.QUOTE_RECIPIENT_EMAIL),
      hasQuoteFromEmail: hasValue(process.env.QUOTE_FROM_EMAIL),
    });
    return res.status(500).json({ error: "Blocked Nordic Stängsel .se mail configuration." });
  }

  const body = getBody(req);

  if (!hasValue(body.name) || !hasValue(body.phone) || !hasValue(body.email) || !hasValue(body.projectType) || !hasValue(body.message)) {
    console.error("Quote request rejected because required fields are missing", {
      hasName: hasValue(body.name),
      hasPhone: hasValue(body.phone),
      hasEmail: hasValue(body.email),
      hasProjectType: hasValue(body.projectType),
      hasMessage: hasValue(body.message),
    });
    return res.status(400).json({ error: "Missing one or more required quote request fields." });
  }

  const normalizedBody: NormalizedQuoteRequest = {
    name: body.name.trim(),
    companyName: optionalValue(body.companyName) || optionalValue(body.company) || optionalValue(body.organization),
    phone: body.phone.trim(),
    email: body.email.trim(),
    projectType: body.projectType.trim(),
    message: body.message.trim(),
    files: normalizeFiles(body),
  };

  try {
    await createPipedriveDeal(normalizedBody);
  } catch (error) {
    logPipedriveError(error);
    return res.status(502).json({ error: "Could not create the deal in Pipedrive. Please try again or contact us directly." });
  }

  try {
    await sendWithResend(normalizedBody);
    await sendCustomerConfirmationWithResend(normalizedBody);
  } catch (error) {
    logEmailError(error);
    return res.status(502).json({ error: "The quote request was saved as a Pipedrive deal, but one or more notification emails could not be sent." });
  }

  return res.status(200).json({
    success: true,
  });
}
