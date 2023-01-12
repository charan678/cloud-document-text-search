
import { Client } from "@elastic/elasticsearch";

const DOCUMENT_INDEX: string = "";

const processDocument = async () => {
    const client: Client = new Client({node: "http://localhost:9200"});
    const result = await client.index( {
        index: DOCUMENT_INDEX,
        document: {},
    });
    
    return ;
}