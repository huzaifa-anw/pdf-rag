import ApiError from "../utils/ApiError.js";
import asyncHandler from "express-async-handler";

const uploadController = asyncHandler(async () => {
	throw new ApiError(
		"File upload is not implemented yet",
		501,
		"UPLOAD_NOT_IMPLEMENTED",
	);
});

export default uploadController;
