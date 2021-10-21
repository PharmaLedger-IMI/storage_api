# Running the application with Kubernetes

## Option 1
Storage API with MongoDB and MongoDB Grid Storage

### Create a Namespace:

Run following command to create a namespace.

```shell
kubectl create namespace option-one
```

If you are not using hosted services for MongoDB and Redis, then deploy MongoDB and Redis under namespace <tt>option-one</tt> by following guidelines.

* [Deploy a MongoDB](#deploy-a-mongodb)
* [Deploy a Redis](#deploy-a-redis)

Get the endpoints of MongoDB and Redis services by running following command.

```shell
kubectl get endpoints --namespace=option-one storage-mongodb storage-redis
```

Which will return ENDPOINTS as like below:

```shell
NAME              ENDPOINTS            AGE
storage-mongodb   172.31.18.89:27017   22h
storage-redis     172.31.29.241:6379   22h
```

We will need these endpoints in next step.

### Deploying Storage API:

Use the relavent <tt>[username]</tt>, <tt>[password]</tt>, <tt>[endpoint]</tt> amd <tt>[port]</tt> of MongoDB service, to set the value of following environment variable in [secrets.yaml](api/option_1/secrets.yaml)

* [DATABASE_URI](api/option_1/secrets.yaml#L4)

Then use the relavent <tt>[endpoint]</tt> and <tt>[port]</tt> of Redis service, to set the value of following environment variable in [secrets.yaml](api/option_1/secrets.yaml)

* [REDIS_URI](api/option_1/secrets.yaml#L7)
* [JOB_REDIS_URI](api/option_1/secrets.yaml#L10)

Then run following command to run a service for Storage API.

```shell
kubectl apply --namespace=option-one -f api/option_1/service.yaml
```

Then get the EXTERNAL-IP of storage-api service by running following command. 

```shell
kubectl get service --namespace=option-five storage-api
```

Which will return EXTERNAL-IP like below:

```shell
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                                                                  PORT(S)        AGE
storage-api   LoadBalancer   10.100.85.98   af23704f0a38043b98a78d4525dbe733-1973784828.eu-central-1.elb.amazonaws.com   80:30918/TCP   20h
```

Use the EXTERNAL-IP as <tt>[enpoint]</tt> to set the value of following environment variable in [secrets.yaml](api/option_1/secrets.yaml)

* [PUBLIC_SERVER_URL](api/option_1/secrets.yaml#L6)
* [SERVER_URL](api/option_1/secrets.yaml#L9)

Also set the following environment variables according to your preference:

* [APP_ID](api/option_1/secrets.yaml#L3)
* [RESTAPI_KEY](api/option_1/secrets.yaml#L8)
* [MASTER_KEY](api/option_1/secrets.yaml#L5)
* [DASHBOARD_USER](api/option_1/secrets.yaml#L11)
* [DASHBOARD_PASS](api/option_1/secrets.yaml#L12)

Then run following commands:

```shell
kubectl apply --namespace=option-one -f api/option_1/secrets.yaml
kubectl apply --namespace=option-one -f api/option_1/deployment.yaml
```

After all of above steps you should be able to access the Storage API's following endpoints:

* RESTful API endpoint - http://<EXTERNAL-IP>/v1/storage
* Dashboard - http://<EXTERNAL-IP>/dashboard

## Option 2
Storage API with MongoDB and Amazon S3 Storage

### Create a Namespace:

Run following command to create a namespace.

```shell
kubectl create namespace option-two
```

If you are not using hosted services for MongoDB and Redis, then deploy MongoDB and Redis under namespace <tt>option-two</tt> by following guidelines.

* [Deploy a MongoDB](#deploy-a-mongodb)
* [Deploy a Redis](#deploy-a-redis)

Get the endpoints of MongoDB and Redis services by running following command.

```shell
kubectl get endpoints --namespace=option-two storage-mongodb storage-redis
```

Which will return ENDPOINTS as like below:

```shell
NAME              ENDPOINTS            AGE
storage-mongodb   172.31.18.89:27017   22h
storage-redis     172.31.29.241:6379   22h
```

We will need these endpoints in next step.

### Deploying Storage API:

Use the relavent <tt>[username]</tt>, <tt>[password]</tt>, <tt>[endpoint]</tt> amd <tt>[port]</tt> of MongoDB service, to set the value of following environment variable in [secrets.yaml](api/option_2/secrets.yaml)

* [DATABASE_URI](api/option_2/secrets.yaml#L4)

Then use the relavent <tt>[endpoint]</tt> and <tt>[port]</tt> of Redis service, to set the value of following environment variable in [secrets.yaml](api/option_2/secrets.yaml)

* [REDIS_URI](api/option_2/secrets.yaml#L7)
* [JOB_REDIS_URI](api/option_2/secrets.yaml#L10)

Then run following command to run a service for Storage API.

```shell
kubectl apply --namespace=option-one -f api/option_2/service.yaml
```

Then get the EXTERNAL-IP of storage-api service by running following command. 

```shell
kubectl get service --namespace=option-two storage-api
```

Which will return EXTERNAL-IP like below:

```shell
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                                                                  PORT(S)        AGE
storage-api   LoadBalancer   10.100.85.98   af23704f0a38043b98a78d4525dbe733-1973784828.eu-central-1.elb.amazonaws.com   80:30918/TCP   20h
```

Use the EXTERNAL-IP as <tt>[enpoint]</tt> to set the value of following environment variable in [secrets.yaml](api/option_2/secrets.yaml)

* [PUBLIC_SERVER_URL](api/option_2/secrets.yaml#L6)
* [SERVER_URL](api/option_2/secrets.yaml#L9)

Setup a S3 bucket in AWS (you can check this [guideline](https://docs.parseplatform.org/parse-server/guide/#set-up-your-bucket-and-permissions)) and then set following S3 environment variables in [secrets.yaml](api/option_2/secrets.yaml)

* [S3_ACCESS_KEY](api/option_2/secrets.yaml#L13)
* [S3_SECRET_KEY](api/option_2/secrets.yaml#L14)
* [S3_BUCKET](api/option_2/secrets.yaml#L15)
* [S3_REGION](api/option_2/secrets.yaml#L16)

Also set the following environment variables in [secrets.yaml](api/option_2/secrets.yaml) according to your preference:

* [APP_ID](api/option_2/secrets.yaml#L3)
* [RESTAPI_KEY](api/option_2/secrets.yaml#L8)
* [MASTER_KEY](api/option_2/secrets.yaml#L5)
* [DASHBOARD_USER](api/option_2/secrets.yaml#L11)
* [DASHBOARD_PASS](api/option_1/secrets.yaml#L12)

Then run following commands:

```shell
kubectl apply --namespace=option-two -f api/option_1/secrets.yaml
kubectl apply --namespace=option-two -f api/option_1/deployment.yaml
```

After all of above steps you should be able to access the Storage API's following endpoints:

* RESTful API endpoint - http://<EXTERNAL-IP>/v1/storage
* Dashboard - http://<EXTERNAL-IP>/dashboard

## Option 3
Storage API with MongoDB and Google Cloud Storage

### Create a Namespace:

Run following command to create a namespace.

```shell
kubectl create namespace option-three
```

If you are not using hosted services for MongoDB and Redis, then deploy MongoDB and Redis under namespace <tt>option-three</tt> by following guidelines.

* [Deploy a MongoDB](#deploy-a-mongodb)
* [Deploy a Redis](#deploy-a-redis)

Get the endpoints of MongoDB and Redis services by running following command.

```shell
kubectl get endpoints --namespace=option-three storage-mongodb storage-redis
```

Which will return ENDPOINTS as like below:

```shell
NAME              ENDPOINTS            AGE
storage-mongodb   172.31.18.89:27017   22h
storage-redis     172.31.29.241:6379   22h
```

We will need these endpoints in next step.

### Deploying Storage API:

Use the relavent <tt>[username]</tt>, <tt>[password]</tt>, <tt>[endpoint]</tt> amd <tt>[port]</tt> of MongoDB service, to set the value of following environment variable in [secrets.yaml](api/option_3/secrets.yaml)

* [DATABASE_URI](api/option_3/secrets.yaml#L4)

Then use the relavent <tt>[endpoint]</tt> and <tt>[port]</tt> of Redis service, to set the value of following environment variable in [secrets.yaml](api/option_3/secrets.yaml)

* [REDIS_URI](api/option_3/secrets.yaml#L7)
* [JOB_REDIS_URI](api/option_3/secrets.yaml#L10)

Then run following command to run a service for Storage API.

```shell
kubectl apply --namespace=option-three -f api/option_3/service.yaml
```

Then get the EXTERNAL-IP of storage-api service by running following command. 

```shell
kubectl get service --namespace=option-three storage-api
```

Which will return EXTERNAL-IP like below:

```shell
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                                                                  PORT(S)        AGE
storage-api   LoadBalancer   10.100.85.98   af23704f0a38043b98a78d4525dbe733-1973784828.eu-central-1.elb.amazonaws.com   80:30918/TCP   20h
```

Use the EXTERNAL-IP as <tt>[enpoint]</tt> to set the value of following environment variable in [secrets.yaml](api/option_3/secrets.yaml)

* [PUBLIC_SERVER_URL](api/option_3/secrets.yaml#L6)
* [SERVER_URL](api/option_3/secrets.yaml#L9)

Setup a Google Cloud Storage bucket in Google Cloud and then set following GCS environment variables in [secrets.yaml](api/option_3/secrets.yaml)

* [GCP_PROJECT_ID](api/option_3/secrets.yaml#L13)
* [GCP_KEYFILE_PATH](api/option_3/secrets.yaml#L14)
* [GCS_BUCKET](api/option_3/secrets.yaml#L15)

Also set the following environment variables in [secrets.yaml](api/option_3/secrets.yaml) according to your preference:

* [APP_ID](api/option_2/secrets.yaml#L3)
* [RESTAPI_KEY](api/option_2/secrets.yaml#L8)
* [MASTER_KEY](api/option_2/secrets.yaml#L5)
* [DASHBOARD_USER](api/option_2/secrets.yaml#L11)
* [DASHBOARD_PASS](api/option_1/secrets.yaml#L12)

Then run following commands:

```shell
kubectl apply --namespace=option-three -f api/option_3/secrets.yaml
kubectl apply --namespace=option-three -f api/option_3/deployment.yaml
```

After all of above steps you should be able to access the Storage API's following endpoints:

* RESTful API endpoint - http://<EXTERNAL-IP>/v1/storage
* Dashboard - http://<EXTERNAL-IP>/dashboard

## Option 4
Storage API with MongoDB and Local File Storage

This deployment does not use persistant volume. For production environment please use persistant volume.

### Create a Namespace:

Run following command to create a namespace.

```shell
kubectl create namespace option-four
```

If you are not using hosted services for MongoDB and Redis, then deploy MongoDB and Redis under namespace <tt>option-four</tt> by following guidelines.

* [Deploy a MongoDB](#deploy-a-mongodb)
* [Deploy a Redis](#deploy-a-redis)

Get the endpoints of MongoDB and Redis services by running following command.

```shell
kubectl get endpoints --namespace=option-four storage-mongodb storage-redis
```

Which will return ENDPOINTS as like below:

```shell
NAME              ENDPOINTS            AGE
storage-mongodb   172.31.18.89:27017   22h
storage-redis     172.31.29.241:6379   22h
```

We will need these endpoints in next step.

### Deploying Storage API:

Use the relavent <tt>[username]</tt>, <tt>[password]</tt>, <tt>[endpoint]</tt> amd <tt>[port]</tt> of MongoDB service, to set the value of following environment variable in [secrets.yaml](api/option_4/secrets.yaml)

* [DATABASE_URI](api/option_4/secrets.yaml#L4)

Then use the relavent <tt>[endpoint]</tt> and <tt>[port]</tt> of Redis service, to set the value of following environment variable in [secrets.yaml](api/option_4/secrets.yaml)

* [REDIS_URI](api/option_4/secrets.yaml#L7)
* [JOB_REDIS_URI](api/option_4/secrets.yaml#L10)

Then run following command to run a service for Storage API.

```shell
kubectl apply --namespace=option-four -f api/option_4/service.yaml
```

Then get the EXTERNAL-IP of storage-api service by running following command. 

```shell
kubectl get service --namespace=option-four storage-api
```

Which will return EXTERNAL-IP like below:

```shell
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                                                                  PORT(S)        AGE
storage-api   LoadBalancer   10.100.85.98   af23704f0a38043b98a78d4525dbe733-1973784828.eu-central-1.elb.amazonaws.com   80:30918/TCP   20h
```

Use the EXTERNAL-IP as <tt>[enpoint]</tt> to set the value of following environment variable in [secrets.yaml](api/option_4/secrets.yaml)

* [PUBLIC_SERVER_URL](api/option_4/secrets.yaml#L6)
* [SERVER_URL](api/option_4/secrets.yaml#L9)

Also set the following environment variables in [secrets.yaml](api/option_4/secrets.yaml) according to your preference:

* [APP_ID](api/option_4/secrets.yaml#L3)
* [RESTAPI_KEY](api/option_4/secrets.yaml#L8)
* [MASTER_KEY](api/option_4/secrets.yaml#L5)
* [DASHBOARD_USER](api/option_4/secrets.yaml#L11)
* [DASHBOARD_PASS](api/option_4/secrets.yaml#L12)

Then run following commands:

```shell
kubectl apply --namespace=option-four -f api/option_4/secrets.yaml
kubectl apply --namespace=option-four -f api/option_4/deployment.yaml
```

After all of above steps you should be able to access the Storage API's following endpoints:

* RESTful API endpoint - http://<EXTERNAL-IP>/v1/storage
* Dashboard - http://<EXTERNAL-IP>/dashboard

## Option 5
Storage API with PostgresDB and Amazon S3 Storage

### Create a Namespace:

Run following command to create a namespace.

```shell
kubectl create namespace option-five
```

If you are not using hosted services for PostgresDB and Redis, then deploy PostgresDB and Redis under namespace <tt>option-five</tt> by following guidelines.

* [Deploy a PostgresDB](#deploy-a-postgresdb)
* [Deploy a Redis](#deploy-a-redis)

Get the endpoints of PostgresDB and Redis services by running following command.

```shell
kubectl get endpoints --namespace=option-five storage-postgres storage-redis
```

Which will return ENDPOINTS as like below:

```shell
NAME              ENDPOINTS            AGE
storage-postgres  172.31.18.89:5432    22h
storage-redis     172.31.29.241:6379   22h
```

We will need these endpoints in next step.

### Deploying Storage API:

Use the relavent <tt>[username]</tt>, <tt>[password]</tt>, <tt>[endpoint]</tt> amd <tt>[port]</tt> of PostgresDB service, to set the value of following environment variable in [secrets.yaml](api/option_5/secrets.yaml)

* [DATABASE_URI](api/option_5/secrets.yaml#L4)

Then use the relavent <tt>[endpoint]</tt> and <tt>[port]</tt> of Redis service, to set the value of following environment variable in [secrets.yaml](api/option_5/secrets.yaml)

* [REDIS_URI](api/option_5/secrets.yaml#L7)
* [JOB_REDIS_URI](api/option_5/secrets.yaml#L10)

Then run following command to run a service for Storage API.

```shell
kubectl apply --namespace=option-five -f api/option_5/service.yaml
```

Then get the EXTERNAL-IP of storage-api service by running following command. 

```shell
kubectl get service --namespace=option-five storage-api
```

Which will return EXTERNAL-IP like below:

```shell
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                                                                  PORT(S)        AGE
storage-api   LoadBalancer   10.100.85.98   af23704f0a38043b98a78d4525dbe733-1973784828.eu-central-1.elb.amazonaws.com   80:30918/TCP   20h
```

Use the EXTERNAL-IP as <tt>[enpoint]</tt> to set the value of following environment variable in [secrets.yaml](api/option_5/secrets.yaml)

* [PUBLIC_SERVER_URL](api/option_5/secrets.yaml#L6)
* [SERVER_URL](api/option_5/secrets.yaml#L9)

Setup a S3 bucket in AWS (you can check this [guideline](https://docs.parseplatform.org/parse-server/guide/#set-up-your-bucket-and-permissions)) and then set following S3 environment variables in [secrets.yaml](api/option_5/secrets.yaml)

* [S3_ACCESS_KEY](api/option_5/secrets.yaml#L13)
* [S3_SECRET_KEY](api/option_5/secrets.yaml#L14)
* [S3_BUCKET](api/option_5/secrets.yaml#L15)
* [S3_REGION](api/option_5/secrets.yaml#L16)

Also set the following environment variables in [secrets.yaml](api/option_5/secrets.yaml) according to your preference:

* [APP_ID](api/option_5/secrets.yaml#L3)
* [RESTAPI_KEY](api/option_5/secrets.yaml#L8)
* [MASTER_KEY](api/option_5/secrets.yaml#L5)
* [DASHBOARD_USER](api/option_5/secrets.yaml#L11)
* [DASHBOARD_PASS](api/option_5/secrets.yaml#L12)

Then run following commands:

```shell
kubectl apply --namespace=option-five -f api/option_5/secrets.yaml
kubectl apply --namespace=option-five -f api/option_5/deployment.yaml
```

After all of above steps you should be able to access the Storage API's following endpoints:

* RESTful API endpoint - http://<EXTERNAL-IP>/v1/storage
* Dashboard - http://<EXTERNAL-IP>/dashboard

## Option 6
Storage API with PostgresDB and Google Cloud Storage

### Create a Namespace:

Run following command to create a namespace.

```shell
kubectl create namespace option-six
```

If you are not using hosted services for PostgresDB and Redis, then deploy PostgresDB and Redis under namespace <tt>option-six</tt> by following guidelines.

* [Deploy a PostgresDB](#deploy-a-postgresdb)
* [Deploy a Redis](#deploy-a-redis)

Get the endpoints of PostgresDB and Redis services by running following command.

```shell
kubectl get endpoints --namespace=option-six storage-postgres storage-redis
```

Which will return ENDPOINTS as like below:

```shell
NAME              ENDPOINTS            AGE
storage-postgres  172.31.18.89:5432    22h
storage-redis     172.31.29.241:6379   22h
```

We will need these endpoints in next step.

### Deploying Storage API:

Use the relavent <tt>[username]</tt>, <tt>[password]</tt>, <tt>[endpoint]</tt> amd <tt>[port]</tt> of PostgresDB service, to set the value of following environment variable in [secrets.yaml](api/option_6/secrets.yaml)

* [DATABASE_URI](api/option_6/secrets.yaml#L4)

Then use the relavent <tt>[endpoint]</tt> and <tt>[port]</tt> of Redis service, to set the value of following environment variable in [secrets.yaml](api/option_6/secrets.yaml)

* [REDIS_URI](api/option_6/secrets.yaml#L7)
* [JOB_REDIS_URI](api/option_6/secrets.yaml#L10)

Then run following command to run a service for Storage API.

```shell
kubectl apply --namespace=option-six -f api/option_6/service.yaml
```

Then get the EXTERNAL-IP of storage-api service by running following command. 

```shell
kubectl get service --namespace=option-six storage-api
```

Which will return EXTERNAL-IP like below:

```shell
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                                                                  PORT(S)        AGE
storage-api   LoadBalancer   10.100.85.98   af23704f0a38043b98a78d4525dbe733-1973784828.eu-central-1.elb.amazonaws.com   80:30918/TCP   20h
```

Use the EXTERNAL-IP as <tt>[enpoint]</tt> to set the value of following environment variable in [secrets.yaml](api/option_6/secrets.yaml)

* [PUBLIC_SERVER_URL](api/option_6/secrets.yaml#L6)
* [SERVER_URL](api/option_6/secrets.yaml#L9)

Setup a Google Cloud Storage bucket in Google Cloud and then set following GCS environment variables in [secrets.yaml](api/option_6/secrets.yaml)

* [GCP_PROJECT_ID](api/option_6/secrets.yaml#L13)
* [GCP_KEYFILE_PATH](api/option_6/secrets.yaml#L14)
* [GCS_BUCKET](api/option_6/secrets.yaml#L15)

Also set the following environment variables in [secrets.yaml](api/option_6/secrets.yaml) according to your preference:

* [APP_ID](api/option_6/secrets.yaml#L3)
* [RESTAPI_KEY](api/option_6/secrets.yaml#L8)
* [MASTER_KEY](api/option_6/secrets.yaml#L5)
* [DASHBOARD_USER](api/option_6/secrets.yaml#L11)
* [DASHBOARD_PASS](api/option_6/secrets.yaml#L12)

Then run following commands:

```shell
kubectl apply --namespace=option-six -f api/option_6/secrets.yaml
kubectl apply --namespace=option-six -f api/option_6/deployment.yaml
```

After all of above steps you should be able to access the Storage API's following endpoints:

* RESTful API endpoint - http://<EXTERNAL-IP>/v1/storage
* Dashboard - http://<EXTERNAL-IP>/dashboard

## Option 7
Storage API with PostgresDB and Local File Storage

This deployment does not use persistant volume. For production environment please use persistant volume.

### Create a Namespace:

Run following command to create a namespace.

```shell
kubectl create namespace option-seven
```

If you are not using hosted services for PostgresDB and Redis, then deploy PostgresDB and Redis under namespace <tt>option-seven</tt> by following guidelines.

* [Deploy a PostgresDB](#deploy-a-postgresdb)
* [Deploy a Redis](#deploy-a-redis)

Get the endpoints of PostgresDB and Redis services by running following command.

```shell
kubectl get endpoints --namespace=option-seven storage-postgres storage-redis
```

Which will return ENDPOINTS as like below:

```shell
NAME              ENDPOINTS            AGE
storage-postgres  172.31.18.89:5432   22h
storage-redis     172.31.29.241:6379   22h
```

We will need these endpoints in next step.

### Deploying Storage API:

Use the relavent <tt>[username]</tt>, <tt>[password]</tt>, <tt>[endpoint]</tt> amd <tt>[port]</tt> of PostgresDB service, to set the value of following environment variable in [secrets.yaml](api/option_4/secrets.yaml)

* [DATABASE_URI](api/option_7/secrets.yaml#L4)

Then use the relavent <tt>[endpoint]</tt> and <tt>[port]</tt> of Redis service, to set the value of following environment variable in [secrets.yaml](api/option_7/secrets.yaml)

* [REDIS_URI](api/option_4/secrets.yaml#L7)
* [JOB_REDIS_URI](api/option_4/secrets.yaml#L10)

Then run following command to run a service for Storage API.

```shell
kubectl apply --namespace=option-seven -f api/option_7/service.yaml
```

Then get the EXTERNAL-IP of storage-api service by running following command. 

```shell
kubectl get service --namespace=option-seven storage-api
```

Which will return EXTERNAL-IP like below:

```shell
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                                                                  PORT(S)        AGE
storage-api   LoadBalancer   10.100.85.98   af23704f0a38043b98a78d4525dbe733-1973784828.eu-central-1.elb.amazonaws.com   80:30918/TCP   20h
```

Use the EXTERNAL-IP as <tt>[enpoint]</tt> to set the value of following environment variable in [secrets.yaml](api/option_7/secrets.yaml)

* [PUBLIC_SERVER_URL](api/option_7/secrets.yaml#L6)
* [SERVER_URL](api/option_7/secrets.yaml#L9)

Also set the following environment variables in [secrets.yaml](api/option_7/secrets.yaml) according to your preference:

* [APP_ID](api/option_7/secrets.yaml#L3)
* [RESTAPI_KEY](api/option_7/secrets.yaml#L8)
* [MASTER_KEY](api/option_7/secrets.yaml#L5)
* [DASHBOARD_USER](api/option_7/secrets.yaml#L11)
* [DASHBOARD_PASS](api/option_7/secrets.yaml#L12)

Then run following commands:

```shell
kubectl apply --namespace=option-seven -f api/option_7/secrets.yaml
kubectl apply --namespace=option-seven -f api/option_7/deployment.yaml
```

After all of above steps you should be able to access the Storage API's following endpoints:

* RESTful API endpoint - http://<EXTERNAL-IP>/v1/storage
* Dashboard - http://<EXTERNAL-IP>/dashboard

## Deploy a MongoDB

This deployment does not use persistant volume. For production environment please use persistant volume.

Change following environment variables in [secrets.yaml](mongodb/secrets.yaml) according to your preference:

* [MONGO_INITDB_DATABASE](mongodb/secrets.yaml#L3)
* [MONGO_INITDB_ROOT_USERNAME](mongodb/secrets.yaml#L4)
* [MONGO_INITDB_ROOT_PASSWORD](mongodb/secrets.yaml#L5)

Then run following commands to deploy MongoDB. Make sure to change <namespace> and use correct namespace.

```shell
kubectl apply --namespace=<namespace> -f mongodb/secrets.yaml
kubectl apply --namespace=<namespace> -f mongodb/deployment.yaml
kubectl apply --namespace=<namespace> -f mongodb/service.yaml
```

## Deploy a PostgresDB

This deployment does not use persistant volume. For production environment please use persistant volume.

Change following environment variables in [secrets.yaml](postgres/secrets.yaml) according to your preference:

* [POSTGRES_DB](postgres/secrets.yaml#L3)
* [POSTGRES_PASSWORD](postgres/secrets.yaml#L4)
* [POSTGRES_USER](postgres/secrets.yaml#L5)

Then run following commands to deploy PostgresDB. Make sure to change <namespace> and use correct namespace.

```shell
kubectl apply --namespace=<namespace> -f postgres/secrets.yaml
kubectl apply --namespace=<namespace> -f postgres/deployment.yaml
kubectl apply --namespace=<namespace> -f postgres/service.yaml
```

## Deploy a Redis

This deployment does not use persistant volume. For production environment please use persistant volume. 

Run following commands to deploy Redis. Make sure to change <namespace> and use correct namespace.

```shell
kubectl apply --namespace=<namespace> -f redis/deployment.yaml
kubectl apply --namespace=<namespace> -f redis/service.yaml
```