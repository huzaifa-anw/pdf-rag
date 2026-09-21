import express from 'express'
import { Request, Response } from 'express';
import ApiResponse from './utils/ApiResponse.js';
import 'dotenv/config'

const app = express();

app.get('/', (req: Request, res: Response) => {

    const response = new ApiResponse(true, 200, 'api cal successful', {})
    res.status(response.statusCode).json(response)
    
})

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Server is runnning on port: ${port}`);
})