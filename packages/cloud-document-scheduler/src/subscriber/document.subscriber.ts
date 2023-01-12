const Queue = require('bee-queue');

const options = {
    removeOnSuccess: true,
    redis: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS,
    },
}

const documentQueue = new Queue('document', options);

const documentSubscriber = () => {
    documentQueue.process(3, (job, done) => {
        // Document Load logic 
        
        setTimeout(() => {
            console.log(`🧾 Document ${job.data.documentId}: ${job.data.cloud} Uploading`);
            done();
        }, job.data.qty * 5000);
    });
}