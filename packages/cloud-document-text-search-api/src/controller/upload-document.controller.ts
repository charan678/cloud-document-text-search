import { Request, Response } from "express";

import {
    DocumentRequest,
    DocumentResponse,
  } from "../dto/document.dto";
  
import DocumentService from "../service/document.service";

export async function getDocumentUploadHandler(
    req: Request<{}, DocumentResponse, DocumentRequest>,
    res: Response
  ) {
    const documentReq: DocumentRequest = req.body as DocumentRequest;
    return new DocumentService().uploadDocument(documentReq);
  }