import express, { Request, Response } from "express";
import routes from "./routes";
const app = express();

app.use(express.json());

routes(app);

app.listen(8000, async () => {
    console.log(`Example app listening on port 8000 `)
});

export default app;