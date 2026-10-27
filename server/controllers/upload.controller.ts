import ApiError from "../utils/ApiError.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse.js";
import { PDFParse } from 'pdf-parse';

const uploadController = asyncHandler(async (req: Request, res: Response) => {
	// log raw bytes
	console.log(req.file?.buffer);

	if (!req.file?.buffer) {
		throw new ApiError('file not found', 400, 'FILE_NOT_SENT')
	}

	const parser = new PDFParse({ data: req.file.buffer })
	
	// log file text content
	console.log(await parser.getText());

	const response = new ApiResponse(true, 201, 'file recieved successfully', null) 
	res.status(response.statusCode).json(response.data);
});

export default uploadController;
