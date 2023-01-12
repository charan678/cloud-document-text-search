import { Request, Response } from "express";

import {
    DocumentResponse,
  } from "../dto/document.dto";

import DocumentService from "../service/document.service";
  
export async function getDocumentHandler(
    req: Request<{}>,
    res: Response<DocumentResponse>
  ) {
    const searchText: string  = req.query.q as string;
    return new DocumentService().getDocument(searchText);
  }