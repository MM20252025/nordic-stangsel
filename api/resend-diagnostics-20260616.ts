declare const process: { env: Record<string, string | undefined> };
declare const fetch: (input: string, init?: unknown) => Promise<{
  ok: boolean;
  status: number;
  statusText: string;
  text: () => Promise<string>;
}>;

const RECIPIENT_EMAIL = "info@nordicstangsel.com";
const DEFAULT_FROM_EMAIL = "Nordic Stängsel <offerter@nordicstangsel.com>";

type VercelRequest = {
  method?: string;
};

type VercelResponse = {
  status: (statusCode: number) => VercelResponse;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  if (!apiKey) {
    return res.status(500).json({
      hasResendApiKey: false,
      from,
      error: "Missing RESEND_API_KEY",
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [RECIPIENT_EMAIL],
      reply_to: RECIPIENT_EMAIL,
      subject: "Nordic Stängsel - Resend diagnostik",
      text: "Automatisk diagnostik av Resend-konfigurationen for Nordic Stängsel.",
    }),
  });

  const body = await response.text();

  return res.status(response.ok ? 200 : 502).json({
    hasResendApiKey: true,
    from,
    status: response.status,
    statusText: response.statusText,
    body,
  });
}
