let express = require('express')
    , { default: ParseServer, ParseGraphQLServer, RedisCacheAdapter } = require('parse-server')
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
    , parseServer = new ParseServer(parseServerConfig)
    , app = express();

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

app.use('/v1/storage', parseServer.app);

// Start the server
app.listen(1337, function() {
  // console.log('Server started!');
});
