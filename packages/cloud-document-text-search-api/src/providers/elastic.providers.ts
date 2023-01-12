import { Client } from "@elastic/elasticsearch";

require("dotenv").config({ path: ".elastic.env" });

class ElasticSearchProvider {
    private client: Client;
    constructor(url: string) {
        this.client = new Client({
            node: url, // http://localhost:9000
        //   cloud: {
        //     id: process.env.ELASTIC_CLOUD_ID,
        //   },
        //   auth: {
        //     username: "elastic",
        //     password: "",
        //   },
        });
    }

    public getConnector(): Client {
        return this.client;
    }
}

export default ElasticSearchProvider;