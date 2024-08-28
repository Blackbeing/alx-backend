var queue = require('kue').createQueue();
// var queue = require('kue').createQueue({
//   redis: {
//     port: 6379,
//     host: 'redis',
//   },});


var job_data = {
  phoneNumber: '4153518780',
  message: 'This is the code to verify your account',
};

var job = queue .create('push_notification_code', job_data)
  .on('enqueue', () => {
    console.log('Notification job created:', job.id);
  })
  .on('complete', () => {
    console.log('Notification job completed');
  })
  .on('failed', () => {
    console.log('Notification job failed');
  })
  .save();
