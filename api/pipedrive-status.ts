declare const process: { env: Record<string, string | undefined> };
declare function fetch(input: string, init?: unknown): Promise<FetchResponse>;

type FetchResponse = {
  ok: boolean;
  status: number;
  statusText: string;
  json: () => Promise<unknown>;
  text: () => Promise<string>;
};

type VercelRequest = {
  method?: string;
};

type VercelResponse = {
  status: (statusCode: number) => VercelResponse;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
};

const OWNER_NAME = "Marcin Makarewicz";

function getPipedriveBaseUrl() {
  const rawDomain = process.env.PIPEDRIVE_COMPANY_DOMAIN?.trim();

  if (!rawDomain) {
    return "";
  }

  const withoutProtocol = rawDomain.replace(/^https?:\/\//i, "").replace(/\/+$/g, "");
  const host = withoutProtocol.includes(".") ? withoutProtocol : `${withoutProtocol}.pipedrive.com`;

  return `https://${host}/api/v1`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function findOwnerInUsers(payload: unknown) {
  if (!isRecord(payload) || !Array.isArray(payload.data)) {
    return false;
  }

  return payload.data.some((user) => {
    if (!isRecord(user)) return false;
    const name = typeof user.name === "string" ? user.name.toLowerCase() : "";
    return user.active_flag !== false && name.includes(OWNER_NAME.toLowerCase());
  });
}

async function checkPipedrive(apiToken: string, baseUrl: string) {
  const response = await fetch(`${baseUrl}/users?api_token=${apiToken}`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  const payload = await response.json().catch(async () => ({ raw: await response.text().catch(() => "") }));

  return {
    reachable: response.ok && isRecord(payload) && payload.success !== false,
    status: response.status,
    ownerFound: response.ok ? findOwnerInUsers(payload) : false,
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiToken = process.env.PIPEDRIVE_API_TOKEN?.trim() ?? "";
  const companyDomain = process.env.PIPEDRIVE_COMPANY_DOMAIN?.trim() ?? "";
  const baseUrl = getPipedriveBaseUrl();
  const result = {
    emailConfigured: Boolean(process.env.RESEND_API_KEY?.trim()),
    pipedriveTokenConfigured: Boolean(apiToken),
    pipedriveDomainConfigured: Boolean(companyDomain),
    pipedriveReachable: false,
    pipedriveOwnerFound: false,
    pipedriveStatus: null as number | null,
  };

  if (!apiToken || !baseUrl) {
    return res.status(200).json(result);
  }

  try {
    const check = await checkPipedrive(apiToken, baseUrl);
    return res.status(200).json({
      ...result,
      pipedriveReachable: check.reachable,
      pipedriveOwnerFound: check.ownerFound,
      pipedriveStatus: check.status,
    });
  } catch {
    return res.status(200).json(result);
  }
}
