class ApiError extends Error {
    message: string;
	statusCode: number;
	errorCode: string;

	constructor(message: string, statusCode: number, errorCode: string) {
        const safeMessage: string = message || 'Internal Server Error'
        super(safeMessage);
        this.message = safeMessage
		this.statusCode = statusCode;
		this.errorCode = errorCode;

		Error.captureStackTrace(this, this.constructor);
	}
}

export default ApiError;