import Router from "express";
import uploadController from "../controllers/upload.controller.js";

const uploadRouter = Router();

uploadRouter.get('/', uploadController);

export default uploadRouter;