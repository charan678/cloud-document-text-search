import { DocumentDao } from "../dao/document.dao";
import { DocumentResponse } from "../dto/document.dto";
import ElasticSearchProvider from "../providers/elastic.providers";

const DOCUMENT_INDEX = "documentInfo";

class DocumentRepository {
    private elasticSearchProvider: ElasticSearchProvider;

    constructor(elasticSearchProvider: ElasticSearchProvider) {
        this.elasticSearchProvider = elasticSearchProvider;
    }

    public getDocuments = async (text: string) => {
        const result =  await this.elasticSearchProvider.getConnector().search({
            index: DOCUMENT_INDEX,
            query: {
                match: {
                    quote: text
                }
            }
        });
        return result;
    }

    public uploadDocument = async (documentDao: DocumentDao) => {
        const result = await this.elasticSearchProvider.getConnector().index({
            index: DOCUMENT_INDEX,
            document: {
                cloud: documentDao.cloud,
            },
          });
        return result;
    }
}

export default DocumentRepository;