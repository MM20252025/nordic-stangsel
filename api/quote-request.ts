type StoredAttachment = {
  name: string;
  mimeType: string;
  size: number;
  contentBase64: string;
};

async function persistQuoteRequest(payload: {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  attachments: StoredAttachment[];
}) {
  if (!process.env.DATABASE_URL) {
    return false;
  }

  try {
    const pg = await import("pg");
    const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

    await pool.query(`
      CREATE TABLE IF NOT EXISTS quote_requests (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        project_type TEXT NOT NULL,
        message TEXT NOT NULL,
        attachments JSONB NOT NULL DEFAULT '[]'::jsonb,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    await pool.query(
      `
        INSERT INTO quote_requests
          (name, phone, email, project_type, message, attachments)
        VALUES
          ($1, $2, $3, $4, $5, $6::jsonb)
      `,
      [
        payload.name,
        payload.phone,
        payload.email,
        payload.projectType,
        payload.message,
        JSON.stringify(payload.attachments),
      ],
    );

    await pool.end();
    return true;
  } catch (error) {
    console.error("Failed to persist quote request", error);
    return false;
  }
}

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "POST" },
      });
    }

    try {
      const formData = await request.formData();
      const name = String(formData.get("name") ?? "").trim();
      const phone = String(formData.get("phone") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const projectType = String(formData.get("projectType") ?? "").trim();
      const message = String(formData.get("message") ?? "").trim();
      const files = formData
        .getAll("images")
        .filter((value): value is File => value instanceof File);

      if (!name || !phone || !email || !projectType || message.length < 10) {
        return Response.json(
          {
            ok: false,
            message: "Ogiltig förfrågan. Kontrollera formuläret och försök igen.",
          },
          { status: 400 },
        );
      }

      const attachments = await Promise.all(
        files.map(async (file) => ({
          name: file.name,
          mimeType: file.type,
          size: file.size,
          contentBase64: Buffer.from(await file.arrayBuffer()).toString("base64"),
        })),
      );

      const storedInDatabase = await persistQuoteRequest({
        name,
        phone,
        email,
        projectType,
        message,
        attachments,
      });

      console.log(
        JSON.stringify({
          type: "quote_request_received",
          name,
          phone,
          email,
          projectType,
          message,
          attachmentCount: attachments.length,
          storedInDatabase,
        }),
      );

      return Response.json({
        ok: true,
        storedInDatabase,
      });
    } catch (error) {
      console.error("Quote request handler failed", error);
      return Response.json(
        {
          ok: false,
          message: "Det gick inte att skicka förfrågan just nu.",
        },
        { status: 500 },
      );
    }
  },
};
