import express, { Request, Response } from "express";
import routes from "./routes";
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());

app.use('/v1/api-docs', swaggerUi.serve)


routes(app);

const server = app.listen(8000, async () => {
    console.log(`Example app listening on port 8000 `)
});

export default server;
