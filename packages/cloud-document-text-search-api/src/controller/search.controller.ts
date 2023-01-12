import { Request, Response } from "express";
import { TextSearchRequest, TextSearchResponse } from "../dto/search.dto";
import ElasticSearchProvider from "../providers/elastic.providers";
import SearchRepository from "../repository/search.repository";

export async function getSearchTextHandler(
    req: Request<{}, {}, TextSearchRequest>,
    res: Response
  ) {
    const searchQuery: string = req.get("q") || "";
    const searchRepository: SearchRepository = new SearchRepository(new ElasticSearchProvider(""));
    return searchRepository.getSearchDocument(searchQuery);
  }