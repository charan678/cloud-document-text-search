import { integer } from "@elastic/elasticsearch/lib/api/types"

export interface DocumentRequest {
    documentId?: string,
    name: string,
    url: string,
    cloud: string,
    type: string,
    description: string
}

export interface DocumentResponse extends DocumentRequest {
    createdAt: string,
    meta: DocumentMeta
};

export interface DocumentMeta {
    size: integer,
}