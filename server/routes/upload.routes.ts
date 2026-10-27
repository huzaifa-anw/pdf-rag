import Router from "express";
import uploadController from "../controllers/upload.controller.js";
import upload from "../middleware/upload.middleware.js";

const uploadRouter = Router();

uploadRouter.post('/', upload.single('file'), uploadController);

export default uploadRouter;