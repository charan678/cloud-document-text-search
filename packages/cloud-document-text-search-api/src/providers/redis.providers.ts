import { RedisClientType } from "@redis/client";
import redis from "redis"


class RedisProvider {
    private redisClient: RedisClientType;
    constructor(url: string) {
        this.redisClient = redis.createClient({
            url: url // 'redis://username:password@localhost:6370'
        });
    }
    
    public getConnector(): RedisClientType {
        return this.redisClient;
    }
}

export default RedisProvider;
