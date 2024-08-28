function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  for (var i = 0; i < jobs.length; i++) {
    let job = queue.create('push_notification_code_3', jobs[i])
    .on('enqueue', () => {
      console.log('Notification job created: ' + job.id);
    })
    .on('complete', () => {
      console.log('Notification job ' + job.id + ' completed');
    })
    .on('failed', (error) => {
      console.log('Notification job ' + job.id + ' failed: ' + error);
    })
    .on('progress', (progress) => {
      console.log('Notification job ' + job.id + ' ' + progress + '% complete');
    })
    .save();
  }
}
export default createPushNotificationsJobs
