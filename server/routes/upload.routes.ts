import Router from "express";
import uploadController from "../controllers/upload.controller.js";

const uploadRouter = Router();

uploadRouter.post('/', uploadController);

export default uploadRouter;