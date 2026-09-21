class ApiResponse<DataType>{
    constructor(
        public success: boolean, 
        public statusCode: number, 
        public message: string, 
        public data: DataType
    ) {}
}

export default ApiResponse;