import { DocumentDao } from "../dao/document.dao";
import { DocumentRequest } from "../dto/document.dto";
import ElasticSearchProvider from "../providers/elastic.providers";
import DocumentRepository from "../repository/document.repository";


class DocumentService {
    private documentRepo: DocumentRepository;
    constructor() {
        this.documentRepo = new DocumentRepository(new ElasticSearchProvider(""))
    }

    public getDocument = (documentText: string) => {
        return this.documentRepo.getDocuments(documentText);
    }

    public uploadDocument = (document: DocumentDao) => {
        return this.documentRepo.uploadDocument(document);
    }
}

export default DocumentService;
