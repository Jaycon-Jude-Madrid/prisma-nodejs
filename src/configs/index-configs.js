import express from 'express';
import dotenv from 'dotenv';
function startServerConfig() {
    const app = express();
    dotenv.config();

    const port = process.env.PORT || 3000;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

export  {
    startServerConfig
}