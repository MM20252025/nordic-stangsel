declare const process: { env: Record<string, string | undefined> };
declare function fetch(input: string, init?: unknown): Promise<{ ok: boolean }>;

const RECIPIENT_EMAIL = "info@nordicstangsel.com";
const BLOCKED_DOMAIN = "nordicstangsel.se";
const DEFAULT_FROM_EMAIL = "Nordic Stängsel <offerter@nordicstangsel.com>";

type QuoteRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
  attachmentCount?: number;
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

function getBody(req: VercelRequest): QuoteRequestBody {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as QuoteRequestBody;
    } catch {
      return {};
    }
  }

  return req.body ?? {};
}

function hasValue(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
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

function buildText(body: Required<Omit<QuoteRequestBody, "attachmentCount">> & { attachmentCount: number }) {
  const lines = [
    `Namn: ${body.name}`,
    `Telefon: ${body.phone}`,
    `E-post: ${body.email}`,
    `Typ av projekt: ${body.projectType}`,
    "",
    "Projektbeskrivning:",
    body.message,
  ];

  if (body.attachmentCount > 0) {
    lines.push("", `Observera: ${body.attachmentCount} bildbilagor valdes i formuläret. Be kunden skicka bilderna som svar eller separat bilaga.`);
  }

  return lines.join("\n");
}

function buildHtml(body: Required<Omit<QuoteRequestBody, "attachmentCount">> & { attachmentCount: number }) {
  const attachmentNote = body.attachmentCount > 0
    ? `<p><strong>Bilagor:</strong> ${body.attachmentCount} bild(er) valdes i formuläret. Be kunden skicka bilderna som svar eller separat bilaga.</p>`
    : "";

  return `
    <h2>Ny offertförfrågan från nordicstangsel.com</h2>
    <p><strong>Namn:</strong> ${escapeHtml(body.name)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(body.phone)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(body.email)}</p>
    <p><strong>Typ av projekt:</strong> ${escapeHtml(body.projectType)}</p>
    <p><strong>Projektbeskrivning:</strong></p>
    <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
    ${attachmentNote}
  `;
}

async function sendWithResend(body: Required<Omit<QuoteRequestBody, "attachmentCount">> & { attachmentCount: number }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const from = process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const subject = `Offertförfrågan - ${body.projectType}`;
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
      subject,
      text: buildText(body),
      html: buildHtml(body),
    }),
  });

  return response.ok;
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

  if (
    !hasValue(body.name) ||
    !hasValue(body.phone) ||
    !hasValue(body.email) ||
    !hasValue(body.projectType) ||
    !hasValue(body.message)
  ) {
    return res.status(400).json({ error: "Missing one or more required quote request fields." });
  }

  const normalizedBody = {
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email.trim(),
    projectType: body.projectType.trim(),
    message: body.message.trim(),
    attachmentCount: Number.isFinite(body.attachmentCount) ? Number(body.attachmentCount) : 0,
  };

  const sent = await sendWithResend(normalizedBody);

  if (!sent) {
    return res.status(503).json({
      error: "Quote email delivery is not configured or failed.",
      recipient: RECIPIENT_EMAIL,
    });
  }

  return res.status(200).json({ status: "sent", recipient: RECIPIENT_EMAIL });
}
