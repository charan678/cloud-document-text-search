import {TextSearchRequest } from "../dto/search.dto";
import ElasticSearchProvider from "../providers/elastic.providers";
import SearchRepository from "../repository/search.repository";


class SearchService {
    private searchRepository: SearchRepository;
    
    constructor() {
        this.searchRepository = new SearchRepository(new ElasticSearchProvider(""));
    }
    
    public  getSearchText = async (textSearchRequest: TextSearchRequest): Promise<Document[]> => {
        return await this.searchRepository.getSearchDocument(textSearchRequest.searchText);
    }
}

export default SearchService; 