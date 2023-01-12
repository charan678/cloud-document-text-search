import { integer } from "@elastic/elasticsearch/lib/api/types"

export interface DocumentDao {
    documentId?: string,
    name: string,
    url: string,
    cloud: string,
    type: string,
    description: string
};