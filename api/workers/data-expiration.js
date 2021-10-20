const Queue = require('bull')
      , dataExpirationQueue = new Queue('data-expiration', process.env.JOB_REDIS_URI)
      , axios = require('axios')
      , moment = require('moment');

// Job Consumer
dataExpirationQueue.process(function(job, done){

  const axiosClient = axios.create({
    baseURL: process.env.SERVER_URL,
    timeout: 1000,
    headers: {
      'x-parse-application-id': process.env.APP_ID,
      'x-storage-master-key': process.env.MASTER_KEY
    }
  });

  // job.data contains the custom data passed when the job was created
  // job.id contains id of this job.
  axiosClient.delete('/classes/'+job.data.className+'/'+job.data.objectId)
    .then(function (response) {
      // handle success
      console.log('[' + moment.utc().toISOString() + '] Data expiring done for', job.data);
    })
    .catch(function (error) {
      // handle error
      console.log('[' + moment.utc().toISOString() + '] Data expiring failed for', job.data);
      console.log('[' + moment.utc().toISOString() + '] Reason', error.message);
    })
    .then(function () {
      done();
    });
});

module.exports = dataExpirationQueue;
