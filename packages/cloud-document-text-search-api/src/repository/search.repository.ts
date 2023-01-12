import ElasticSearchProvider from "../providers/elastic.providers";

const DOCUMENT_INDEX: string = "documents";

export default class SearchRepository {
    private elasticSearchProvider: ElasticSearchProvider;
    constructor(elasticSearchProvider: ElasticSearchProvider) {
        this.elasticSearchProvider = elasticSearchProvider;
    }

    public async getSearchDocument(searchText: string): Promise<Document[]> {
        const result = await this.elasticSearchProvider.getConnector().search({
            index: DOCUMENT_INDEX,
            query: {
                match: {
                  quote: searchText,
                }
              }
        });
        return [];
    }
}