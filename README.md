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

| Option        | Database Store | File Store           | Setup Instruction
| ------------- | -------------  | -------------        | -------------
| #1            | MongoDB        | MongoDB Grid Storage | [See](#option-1)
| #2            | MongoDB        | Amazon S3 Storage    | [See](#option-2)
| #3            | MongoDB        | Google Cloud Storage | [See](#option-3)
| #4            | MongoDB        | Local File Storage   | [See](#option-4)
| #5            | PostgresDB     | Amazon S3            | [See](#option-5)
| #6            | PostgresDB     | Google Cloud Storage | [See](#option-6)
| #7            | PostgresDB     | Local File Storage   | [See](#option-7)

# Running the application with Docker + Docker Compose

## Option 1
Storage API with MongoDB and MongoDB Grid Storage

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 2
Storage API with MongoDB and Amazon S3 Storage

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" S3_ACCESS_KEY="<S3_ACCESS_KEY>" S3_SECRET_KEY="<S3_SECRET_KEY>" S3_BUCKET="<S3_BUCKET>" S3_REGION="<S3_REGION>" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 3
Storage API with MongoDB and Google Cloud Storage

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" GCP_PROJECT_ID="<GCP_PROJECT_ID>" GCP_KEYFILE_PATH="<GCP_KEYFILE_PATH>" GCS_BUCKET="<GCS_BUCKET>" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 4
Storage API with MongoDB and Local File Storage

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" FILES_SUB_DIRECTORY="./files" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

## Option 5
Storage API with PostgresDB and Amazon S3 Storage

```shell
DATABASE_URI="postgres://developer:secret@postgres:5432/storage-db" S3_ACCESS_KEY="<S3_ACCESS_KEY>" S3_SECRET_KEY="<S3_SECRET_KEY>" S3_BUCKET="<S3_BUCKET>" S3_REGION="<S3_REGION>" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.postgres.yml -f docker-compose.api.yml up --build
```

## Option 6
Storage API with PostgresDB and Google Cloud Storage

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