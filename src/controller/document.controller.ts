import { Request, Response } from "express";

import {
    DocumentRequest,
    DocumentResponse,
  } from "../dto/document.dto";
  
  import {
    getDocument,
  } from "../service/document.service";


export async function getDocumentHandler(
    req: Request<{}, DocumentResponse, DocumentRequest>,
    res: Response
  ) {
    const document: DocumentResponse = await getDocument({documentId: "123"});
  
    return res.send(document);
  }