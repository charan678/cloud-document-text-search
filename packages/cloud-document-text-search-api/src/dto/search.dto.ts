import { DocumentResponse } from "./document.dto"

export interface TextSearchRequest {
    searchText: string
   
}

export interface TextSearchResponse extends TextSearchRequest {
    documents: DocumentResponse[]
}