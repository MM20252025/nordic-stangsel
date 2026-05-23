import { Router, type IRouter } from "express";
import healthRouter from "./health";
import quoteRequestRouter from "./quote-request";

const router: IRouter = Router();

router.use(healthRouter);
router.use(quoteRequestRouter);

export default router;