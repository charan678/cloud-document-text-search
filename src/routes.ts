import { Express, Request, Response } from "express";

import { getDocumentHandler } from "./controller/document.controller";

function routes(app: Express) {

    app.get("/v1/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    app.get("/v1/document", getDocumentHandler);

}

export default routes;