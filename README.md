# Storage APIs

# Introduction
This repo will provide following APIs to access or store data from a PostgresDB (9.6+) or MongoDB (3.6+)
* [Object Store APIs](http://storage-docs.pharmaledger.eu/#object-store-apis)
* [File Store APIs](http://storage-docs.pharmaledger.eu/#file-store-apis)
* [Schema Definition APIs](http://storage-docs.pharmaledger.eu/#schema-definition-apis)


N.B. If you use MongoDB as Database, to use [File Store APIs](http://storage-docs.pharmaledger.eu/#file-store-apis) you can choose following options as file storage:

* MongoDB Grid Storage (used by default and requires no setup); or
* Amazon S3 Storage; or
* Google Cloud Storage; or
* Local File Storage

N.B. If you use PostgresDB as Database, to use [File Store APIs](http://storage-docs.pharmaledger.eu/#file-store-apis) you can choose following options as file storage:

* Local File Storage; or
* Amazon S3 Storage; or
* Google Cloud Storage;

So you can setup the application in following ways:

| Option        | Database Store | File Store           | Local Setup                        | Cloud Setup 
| ------------- | -------------  | -------------        | -------------                      | -------------
| #1            | MongoDB        | MongoDB Grid Storage | [Docker Compose](#option-1)        | [Kubernetes](k8s/README.md#option-1)
| #2            | MongoDB        | Amazon S3 Storage    | [Docker Compose](#option-2)        | [Kubernetes](k8s/README.md#option-2)
| #3            | MongoDB        | Google Cloud Storage | [Docker Compose](#option-3)        | [Kubernetes](k8s/README.md#option-3)
| #4            | MongoDB        | Local File Storage   | [Docker Compose](#option-4)        | [Kubernetes](k8s/README.md#option-4)
| #5            | PostgresDB     | Amazon S3 Storage    | [Docker Compose](#option-5)        | [Kubernetes](k8s/README.md#option-5)
| #6            | PostgresDB     | Google Cloud Storage | [Docker Compose](#option-6)        | [Kubernetes](k8s/README.md#option-6)
| #7            | PostgresDB     | Local File Storage   | [Docker Compose](#option-7)        | [Kubernetes](k8s/README.md#option-7)

Storage API application environment variables can be found [here](api/.env) and their description is given below.

| Variable Name       | Required / Optional | Description
| ------------------  | ------------------- | -------------
| APP_ID              | REQUIRED            | A unique identifier for your app. You can use any arbitrary string or UUID string.
| MASTER_KEY          | REQUIRED            | The master key that overrides all permissions. Keep this secret. You can use any arbitrary string or UUID string.
| RESTAPI_KEY         | REQUIRED            | Key for REST calls. You can use any arbitrary string or UUID string.
| SERVER_URL          | REQUIRED            | URL to Storage API server with http:// or https://.
| PUBLIC_SERVER_URL   | REQUIRED            | Public URL to Storage API server with http:// or https://.
| DATABASE_URI        | REQUIRED            | The connection string for your database. Supported databases are mongodb or postgres. Be sure to URL encode your password if your password has special characters.
| REDIS_URI           | REQUIRED            | The connection string to a redis cache database (0). This is to speed up schema verifications, user, roles and sessions lookup.
| JOB_REDIS_URI       | REQUIRED            | The connection string to a redis cache database (1). This is to manage backgroud jobs.
| DASHBOARD_USER      | REQUIRED            | Username to access the Dashboard. Keep this secret
| DASHBOARD_PASS      | REQUIRED            | Password to access the Dashboard. Keep this secret
| FILES_SUB_DIRECTORY | REQUIRED for [Option 4](#option-4) and [Option 7](#option-7) | Location to centralised file storage. e.g Docker volume. 
| S3_ACCESS_KEY       | REQUIRED for [Option 2](#option-2) and [Option 5](#option-5) | The AWS access key for a user that has the required permissions.
| S3_SECRET_KEY       | REQUIRED for [Option 2](#option-2) and [Option 5](#option-5) | The AWS secret key for the user.
| S3_BUCKET           | REQUIRED for [Option 2](#option-2) and [Option 5](#option-5) | The name of your S3 bucket. Needs to be globally unique in all of S3.
| S3_REGION           | REQUIRED for [Option 2](#option-2) and [Option 5](#option-5) | The AWS region to connect to.
| S3_BUCKET_PREFIX    | OPTIONAL for [Option 2](#option-2) and [Option 5](#option-5) | Create all the files with the specified prefix added to the filename.
| S3_DIRECT_ACCESS    | OPTIONAL for [Option 2](#option-2) and [Option 5](#option-5) | Whether reads are going directly to S3 or proxied through Storage API. If set to true, files will be made publicly accessible, and reads will not be proxied.
| GCP_PROJECT_ID      | REQUIRED for [Option 3](#option-3) and [Option 6](#option-6) | The project ID from the Google Developer’s Console.
| GCP_KEYFILE_PATH    | REQUIRED for [Option 3](#option-3) and [Option 6](#option-6) | Full path to the a .json, .pem, or .p12 key downloaded from the Google Developers Console. e.g Docker volume path.
| GCS_BUCKET          | REQUIRED for [Option 3](#option-3) and [Option 6](#option-6) | The name of your GCS bucket.
| GCS_BUCKET_PREFIX   | OPTIONAL for [Option 3](#option-3) and [Option 6](#option-6) | Create all the files with the specified prefix added to the filename.
| GCS_DIRECT_ACCESS   | OPTIONAL for [Option 3](#option-3) and [Option 6](#option-6) | Whether reads are going directly to S3 or proxied through Storage API.	


# Running the application with Docker Compose

## Option 1
Storage API with MongoDB and MongoDB Grid Storage

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 2
Storage API with MongoDB and Amazon S3 Storage. Make sure to use correct value for following ENV variables:

* <tt>S3_ACCESS_KEY</tt>
* <tt>S3_SECRET_KEY</tt>
* <tt>S3_BUCKET</tt>
* <tt>S3_REGION</tt>

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" S3_ACCESS_KEY="<S3_ACCESS_KEY>" S3_SECRET_KEY="<S3_SECRET_KEY>" S3_BUCKET="<S3_BUCKET>" S3_REGION="<S3_REGION>" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 3
Storage API with MongoDB and Google Cloud Storage. Make sure to use correct value for following ENV variables:

* <tt>GCP_PROJECT_ID</tt>
* <tt>GCP_KEYFILE_PATH</tt>
* <tt>GCS_BUCKET</tt>

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" GCP_PROJECT_ID="<GCP_PROJECT_ID>" GCP_KEYFILE_PATH="<GCP_KEYFILE_PATH>" GCS_BUCKET="<GCS_BUCKET>" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 4
Storage API with MongoDB and Local File Storage

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" FILES_SUB_DIRECTORY="./files" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 5
Storage API with PostgresDB and Amazon S3 Storage. Make sure to use correct value for following ENV variables:

* <tt>S3_ACCESS_KEY</tt>
* <tt>S3_SECRET_KEY</tt>
* <tt>S3_BUCKET</tt>
* <tt>S3_REGION</tt>

```shell
DATABASE_URI="postgres://developer:secret@postgres:5432/storage-db" S3_ACCESS_KEY="<S3_ACCESS_KEY>" S3_SECRET_KEY="<S3_SECRET_KEY>" S3_BUCKET="<S3_BUCKET>" S3_REGION="<S3_REGION>" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.postgres.yml -f docker-compose.api.yml up --build
```

## Option 6
Storage API with PostgresDB and Google Cloud Storage. Make sure to use correct value for following ENV variables:

* <tt>GCP_PROJECT_ID</tt>
* <tt>GCP_KEYFILE_PATH</tt>
* <tt>GCS_BUCKET</tt>

```shell
DATABASE_URI="postgres://developer:secret@postgres:5432/storage-db" GCP_PROJECT_ID="<GCP_PROJECT_ID>" GCP_KEYFILE_PATH="<GCP_KEYFILE_PATH>" GCS_BUCKET="<GCS_BUCKET>" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.postgres.yml -f docker-compose.api.yml up --build
```

## Option 7
Storage API with PostgresDB and Local File Storage

```shell
DATABASE_URI="postgres://developer:secret@postgres:5432/storage-db" FILES_SUB_DIRECTORY="./files" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.postgres.yml -f docker-compose.api.yml up --build
```

After running the application following url will be accessible:

* RESTful API endpoint: http://localhost:1337/v1/storage
* Dashboard: http://localhost:1337/dashboard
    * username: [Value of DASHBOARD_USER env variable](api/.env#L9)
    * password: [Value of DASHBOARD_PASS env variable](api/.env#L10)

# Documentations and Tools
Storage API uses [Parse Server](https://docs.parseplatform.org/parse-server/guide/) following features.
* Objects
* Queries
* Files
* Schema

Storage API has implemented Data Expiration feature which is not availbale in Parse Server.

You can interact with Storage API with [RESTful APIs](http://storage-docs.pharmaledger.eu) or [Official Parse JavaScript SDK](https://docs.parseplatform.org/js/guide/)

We created a [Postman Collection](https://www.getpostman.com/collections/51c483fe9b294a6183a8) to test the RESTful APIs. Import it and change the environment variables to connect to your setup environment.

We recommend to follow [Storage API Documentation](http://storage-docs.pharmaledger.eu). However, You can also check [Parse REST Guide](https://docs.parseplatform.org/rest/guide/) but we are not using all the features. So check only following sections.

* [Objects](https://docs.parseplatform.org/rest/guide/#objects)
* [Queries](https://docs.parseplatform.org/rest/guide/#queries)
* [Files](https://docs.parseplatform.org/rest/guide/#files)
* [Schema](https://docs.parseplatform.org/rest/guide/#schema)
