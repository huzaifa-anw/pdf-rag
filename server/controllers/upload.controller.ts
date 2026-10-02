import ApiError from "../utils/ApiError.js";
import asyncHandler from "express-async-handler";

const uploadController = asyncHandler(async () => {
	throw new ApiError(
		501,
		"File upload is not implemented yet",
		"UPLOAD_NOT_IMPLEMENTED",
	);
});

export default uploadController;
