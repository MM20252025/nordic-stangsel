declare const fetch: (input: string, init?: unknown) => Promise<{
  status: number;
  statusText: string;
  text: () => Promise<string>;
}>;

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

  const response = await fetch("https://nordicstangsel.com/api/quote-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Test Automatyczny Nordic Stangsel",
      phone: "+46700000000",
      email: "info@nordicstangsel.com",
      projectType: "Test autoresponder",
      message:
        "Automatyczny test endpointu /api/quote-request po dodaniu szwedzkiego potwierdzenia dla klienta. To zapytanie testowe mozna usunac z Pipedrive.",
      files: ["test-autoresponder.txt"],
    }),
  });

  const body = await response.text();

  return res.status(response.status).json({
    status: response.status,
    statusText: response.statusText,
    body,
  });
}
