import type { ErrorRequestHandler } from "express";
import ApiError from "../utils/ApiError.js";

const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
	if (res.headersSent) {
		next(err);
		return;
	}

	const isApiError = err instanceof ApiError;
	const statusCode = isApiError ? err.statusCode : 500;
	const errorCode = isApiError ? err.errorCode : "INTERNAL_SERVER_ERROR";
	const message = err instanceof Error && err.message
		? err.message
		: "Internal Server Error";
	const response = {
		success: false,
		statusCode,
		errorCode,
		message,
		...(process.env.NODE_ENV !== "production" && {
			stack: err instanceof Error ? err.stack : undefined,
		}),
	};

	if (!isApiError) {
		console.error(err);
	}

	res.status(statusCode).json(response);
};

export default errorHandler;