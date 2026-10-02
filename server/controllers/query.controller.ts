import ApiError from "../utils/ApiError.js";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const createQuery = asyncHandler(async (req: Request, res: Response) => {
    type reqBodyType = {
        query: string
    }
	const { query }: reqBodyType = req.body;

    if (query.length < 3 || query.length > 50) {
        throw new ApiError('Query length should be 3-500 charcters', 401, 'INVALID_QUERY_SIZE');
    }

    res.status(200).json({msg: 'welcome to query route'})

});

export default createQuery; 