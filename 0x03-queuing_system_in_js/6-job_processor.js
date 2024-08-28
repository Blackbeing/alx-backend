var queue = require('kue').createQueue();
// var queue = require('kue').createQueue({
//   redis: {
//     port: 6379,
//     host: 'redis',
//   },});


function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

queue.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
})
