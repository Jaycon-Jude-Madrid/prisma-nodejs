import dotenv from 'dotenv';
import express from 'express';

const app = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
