let express = require('express')
    , { default: ParseServer, RedisCacheAdapter } = require('parse-server')
    , ParseDashboard = require('parse-dashboard')
    , redisOptions = {url: process.env.REDIS_URI}
    , redisCache = new RedisCacheAdapter(redisOptions)
    , parseServerConfig = {
      databaseURI: process.env.DATABASE_URI,
      appId: process.env.APP_ID,
      restAPIKey: process.env.RESTAPI_KEY,
      masterKey: process.env.MASTER_KEY,
      serverURL: process.env.SERVER_URL,
      publicServerURL: process.env.PUBLIC_SERVER_URL,
      cloud: "./cloud/main.js",
      cacheAdapter: redisCache
    }
    , FSFilesAdapter = require('@parse/fs-files-adapter')
    , FSS3Adapter = require('parse-server').S3Adapter
    , FSGCSAdapter = require('parse-server-gcs-adapter');

if(process.env.FILES_SUB_DIRECTORY) {
  parseServerConfig.filesAdapter = new FSFilesAdapter({
    "filesSubDirectory": process.env.FILES_SUB_DIRECTORY
  });
  console.log('******************** FSFilesAdapter ********************');
} else if(process.env.S3_ACCESS_KEY && process.env.S3_SECRET_KEY && process.env.S3_BUCKET) {
  console.log('******************** S3Adapter ********************');
  parseServerConfig.filesAdapter = new FSS3Adapter(
    process.env.S3_ACCESS_KEY,
    process.env.S3_SECRET_KEY,
    process.env.S3_BUCKET,
    {
      region: process.env.S3_REGION || 'us-east-1',
      bucketPrefix: process.env.S3_BUCKET_PREFIX || null,
      directAccess: process.env.S3_DIRECT_ACCESS === 'true' ? true : false,
    }
  );
} else if(process.env.GCP_PROJECT_ID && process.env.GCP_KEYFILE_PATH && process.env.GCS_BUCKET) {
  console.log('******************** FSGCSAdapter ********************');
  parseServerConfig.filesAdapter = new FSGCSAdapter(
    process.env.GCP_PROJECT_ID,
    process.env.GCP_KEYFILE_PATH,
    process.env.GCS_BUCKET,
    {
      bucketPrefix: process.env.GCS_BUCKET_PREFIX || null,
      directAccess: process.env.GCS_DIRECT_ACCESS === 'true' ? true : false,
    }
  );
}

let parseServer = new ParseServer(parseServerConfig)
    , parseDashboardConfig = {
      allowInsecureHTTP: true,
      apps: [
        {
          serverURL: process.env.SERVER_URL,
          appId: process.env.APP_ID,
          masterKey: process.env.MASTER_KEY,
          appName: "StorageDb"
        }
      ],
      users: [{
        user: process.env.DASHBOARD_USER, pass: process.env.DASHBOARD_PASS
      }]
    }
    , parseDashboard = new ParseDashboard(parseDashboardConfig, { allowInsecureHTTP: parseDashboardConfig.allowInsecureHTTP })
    , app = express()
    , mung = require('express-mung')
    , moment = require('moment')
    , dataExpirationWorker = require('./workers/data-expiration')
    , addRequestId = require('express-request-id')({
      setHeader: false
    })
    , morgan = require('morgan');

function addDataExpirationWorker(responseBody, req) {
  if((req.method === 'POST' || req.method === 'PUT') && req.path.includes("/classes/") && req.body.expiresAt) {
    const regex = /classes\/(?<className>\w+)\/(?<objectId>\w+)/g;
    const { groups: { className, objectId } } = regex.exec(req.path);
    const now = moment.utc();
    const expiresAt = moment(req.body.expiresAt.iso).utc();
    const diffInMilliseconds = expiresAt.diff(now)
    const jobData = {className: className, objectId: objectId, expiresAt: expiresAt.toISOString()};
    const jobOptions = {
      delay: diffInMilliseconds,
      attempts: 3
    };
    // Job Producer
    dataExpirationWorker.add(jobData, jobOptions);
    console.log('[' + moment.utc().toISOString() + '] Data expiration job is enqeued for', jobData)
  }
}

// Start Rails style logging
app.use(addRequestId);
morgan.token('id', function(req) {
  return req.id.split('-')[0];
});
app.use(morgan("[:date[iso] #:id] Started :method :url for :remote-addr", {
  immediate: true
}));
app.use(morgan("[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms"));
// End Rails style logging

app.all('/v1/storage/*', function (req, res, next) {
  if(req.headers['x-storage-application-id']) {
    req.headers['x-parse-application-id'] = req.headers['x-storage-application-id'];
  }
  if(req.headers['x-storage-master-key']) {
    req.headers['x-parse-master-key'] = req.headers['x-storage-master-key'];
  }
  if(req.headers['x-storage-rest-api-key']) {
    req.headers['x-parse-rest-api-key'] = req.headers['x-storage-rest-api-key'];
  }
  next();
});

app.use(express.json());

app.use(mung.json(
    function readResponse(responseBody, req, res) {
      if(req.method === 'POST' && req.path.includes("/batch")) {
        const requests = req.body.requests;
        const responses = responseBody;

        requests.forEach((req, index) => {
          let responseBody = responses[index].success;
          addDataExpirationWorker(responseBody, req);
        });
      } else {
        addDataExpirationWorker(responseBody, req);
      }
      return responseBody;
    }
));

app.use('/v1/storage', parseServer.app);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', parseDashboard);

// Start the server
app.listen(1337, function() {
  console.log('Server started!');
});
