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

const addDocument = (document) => {
    return documentQueue.createJob(document).save();
};

documentQueue.process((job, done) => {
    done();
});


export default addDocument;