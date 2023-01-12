const cron = require('node-cron');

cron.schedule('* * * * *', function() {
    // Pull Event 
    console.log("Pull Event from Redis Queue ")
    documentSubscriber();
});