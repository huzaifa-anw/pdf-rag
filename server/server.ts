import express from 'express'
import { Request, Response } from 'express';
import ApiResponse from './utils/ApiResponse.js';
import queryRouter from './routes/query.routes.js';
import uploadRouter from './routes/upload.routes.js';
import errorMiddleware from './middleware/error.middleware.js';
import 'dotenv/config'

const app = express();

app.use('/query', queryRouter);
app.use('/upload', uploadRouter);

app.get('/', (req: Request, res: Response) => {

    const response = new ApiResponse(true, 200, 'api call successful', {})
    res.status(response.statusCode).json(response)
          
})

app.use(errorMiddleware);

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Server is runnning on port: ${port} \n http://localhost:${port}`);
})