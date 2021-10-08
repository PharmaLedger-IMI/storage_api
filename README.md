# Storage APIs

# Introduction
This repo will provide following APIs to access or store data from a PostgresDB (9.6+) or MongoDB (3.6+)
* [Object Store APIs](http://storage-docs.pharmaledger.eu/#object-store-apis)
* [File Store APIs](http://storage-docs.pharmaledger.eu/#file-store-apis)
* [Schema Definition APIs](http://storage-docs.pharmaledger.eu/#schema-definition-apis)


# Running the application

Install Docker and Docker Compose:
* Docker - https://docs.docker.com/engine/install/
* Docker Compose - https://docs.docker.com/compose/install/

## Storage API application with a MongoDB

```shell
DATABASE_URI="mongodb://developer:secret@mongodb:27017/storage-db?authSource=admin" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.mongodb.yml -f docker-compose.api.yml up --build
```

N.B. If you use MongoDB as Database, to use [File Store APIs](http://storage-docs.pharmaledger.eu/#file-store-apis) you can choose following options as file hosting:

* MongoDB Grid Storage (used by default and requires no setup); or
* Amazon S3; or
* Google Cloud Storage; or
* Local file storage

## Storage API application with a PostgresDB

```shell
DATABASE_URI="postgres://developer:secret@postgres:5432/storage-db" docker-compose -p storage_api -f docker-compose.redis.yml -f docker-compose.postgres.yml -f docker-compose.api.yml up --build
```

N.B. If you use PostgresDB as Database, to use [File Store APIs](http://storage-docs.pharmaledger.eu/#file-store-apis) you can choose following options as file hosting:

* Amazon S3; or
* Google Cloud Storage; or
* Local file storage