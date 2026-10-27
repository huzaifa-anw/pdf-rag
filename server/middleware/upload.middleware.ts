import multer from "multer";
import ApiError from "../utils/ApiError.js";

const upload = multer({
    storage: multer.memoryStorage(),
    // 10 mb limit
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
            return cb(new ApiError('Invalid file formt, only pdf\'s are expected', 400, 'INVALID_FILE_FORMAT'))
        }
        cb(null, true);
    },
})

export default upload;