import express from 'express'
import 'dotenv/config'

const app = express();

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Server is runnning on port: ${port}`);
})