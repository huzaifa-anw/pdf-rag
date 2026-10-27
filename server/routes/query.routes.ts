import Router from "express";
import createQuery from "../controllers/query.controller.js";

const queryRouter = Router();

queryRouter.post('/', createQuery);

export default queryRouter;