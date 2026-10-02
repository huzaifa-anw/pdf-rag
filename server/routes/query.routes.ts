import Router from "express";
import createQuery from "../controllers/query.controller.js";

const queryRouter = Router();

queryRouter.get('/', createQuery);

export default queryRouter;