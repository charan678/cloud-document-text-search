import { Express, Request, Response } from "express";

import { getDocumentHandler } from "./controller/document.controller";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { getSearchTextHandler } from "./controller/search.controller";
import { getDocumentUploadHandler } from "./controller/upload-document.controller";

function routes(app: Express) {
    app.get("/v1/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    app.get("/v1/document", getDocumentHandler);
    app.get("/v1/document/upload", getDocumentUploadHandler);
    app.get("/v1/search", getSearchTextHandler);
    app.get('/v1/api-docs', swaggerUi.setup(swaggerDocument));
};

export default routes;
