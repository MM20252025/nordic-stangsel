import express, { type Express } from "express";
import cors from "cors";
import pinoHttpImport from "pino-http";
import type { IncomingMessage, ServerResponse } from "http";
import router from "./routes";
import { logger } from "./lib/logger";

const pinoHttp = pinoHttpImport as unknown as (options: {
  logger: typeof logger;
  serializers: {
    req: (req: IncomingMessage & { id?: string }) => {
      id: string | undefined;
      method: string | undefined;
      url: string | undefined;
    };
    res: (res: ServerResponse) => { statusCode: number | undefined };
  };
}) => express.RequestHandler;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0] ?? req.url,
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
