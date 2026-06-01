import express, { Router, type IRouter, type Request } from "express";
import { logger } from "../lib/logger";

const router: IRouter = Router();
const QUOTE_RECIPIENT_EMAIL = "info@nordicstangsel.com";

type QuoteRequestFields = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

type UploadedFileSummary = {
  fieldName: string;
  fileName: string;
  contentType?: string;
  size: number;
};

function parseBoundary(contentType: string): string | null {
  const match = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(contentType);
  return match?.[1] ?? match?.[2] ?? null;
}

function trimTrailingLineBreaks(value: string): string {
  return value.replace(/\r\n$/, "");
}

function decodeFieldValue(value: string): string {
  return Buffer.from(value, "latin1").toString("utf8").trim();
}

function parseMultipartRequest(
  req: Request,
): { fields: QuoteRequestFields; files: UploadedFileSummary[] } | null {
  const contentType = req.headers["content-type"];

  if (typeof contentType !== "string" || !Buffer.isBuffer(req.body)) {
    return null;
  }

  const boundary = parseBoundary(contentType);

  if (!boundary) {
    return null;
  }

  const marker = `--${boundary}`;
  const raw = req.body.toString("latin1");
  const parts = raw.split(marker).slice(1, -1);
  const fields: QuoteRequestFields = {};
  const files: UploadedFileSummary[] = [];

  for (const part of parts) {
    const normalized = part.replace(/^\r\n/, "");
    const [rawHeaders, ...bodyChunks] = normalized.split("\r\n\r\n");

    if (!rawHeaders || bodyChunks.length === 0) {
      continue;
    }

    const body = trimTrailingLineBreaks(bodyChunks.join("\r\n\r\n"));
    const headers = rawHeaders.split("\r\n");
    const disposition = headers.find((header) =>
      header.toLowerCase().startsWith("content-disposition:"),
    );

    if (!disposition) {
      continue;
    }

    const nameMatch = /name="([^"]+)"/.exec(disposition);

    if (!nameMatch) {
      continue;
    }

    const fieldName = nameMatch[1];
    const filenameMatch = /filename="([^"]*)"/.exec(disposition);
    const bodyBuffer = Buffer.from(body, "latin1");
    const contentTypeHeader = headers.find((header) =>
      header.toLowerCase().startsWith("content-type:"),
    );
    const fileContentType = contentTypeHeader
      ?.split(":")
      .slice(1)
      .join(":")
      .trim();

    if (filenameMatch && filenameMatch[1]) {
      files.push({
        fieldName,
        fileName: decodeFieldValue(filenameMatch[1]),
        contentType: fileContentType,
        size: bodyBuffer.byteLength,
      });
      continue;
    }

    fields[fieldName as keyof QuoteRequestFields] = decodeFieldValue(body);
  }

  return { fields, files };
}

function hasValue(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

router.post(
  "/quote-request",
  express.raw({ type: () => true, limit: "15mb" }),
  (req, res) => {
    let fields: QuoteRequestFields = {};
    let files: UploadedFileSummary[] = [];

    if (Buffer.isBuffer(req.body)) {
      const parsed = parseMultipartRequest(req);

      if (!parsed) {
        return res.status(400).json({ error: "Unsupported form payload." });
      }

      fields = parsed.fields;
      files = parsed.files;
    } else if (typeof req.body === "object" && req.body !== null) {
      fields = req.body as QuoteRequestFields;
    } else {
      return res.status(400).json({ error: "Unsupported request body." });
    }

    if (
      !hasValue(fields.name) ||
      !hasValue(fields.phone) ||
      !hasValue(fields.email) ||
      !hasValue(fields.projectType) ||
      !hasValue(fields.message)
    ) {
      return res.status(400).json({
        error: "Missing one or more required quote request fields.",
      });
    }

    logger.warn(
      {
        quoteRequest: {
          ...fields,
          files,
          intendedRecipient: QUOTE_RECIPIENT_EMAIL,
        },
      },
      "Quote request email delivery is not configured; falling back to direct .com contact route",
    );

    return res.status(503).json({
      error: "Email delivery is not configured.",
      recipient: QUOTE_RECIPIENT_EMAIL,
    });
  },
);

export default router;
