import { Express, Request, Response } from "express";

import { getDocumentHandler } from "./controller/document.controller";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

function routes(app: Express) {
    app.get("/v1/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    app.get("/v1/document", getDocumentHandler);
    // app.get('/api-docs/*', function(request, response, next){
    //   console.log(request.url);
    //   var apiNameSplitArray = request.url.split('/')
    //   var apiName = apiNameSplitArray[2]
    //   swaggerDoc = JSONConstructor.JSONConstructorTest(apiName.trim())
    //   next()
    // })
    app.get('/v1/api-docs', swaggerUi.setup(swaggerDocument));

}

export default routes;
