kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.3.1/cert-manager.yaml
kubectl get pods -n cert-manager

kubectl create namespace usecase7-dev
kubectl apply --namespace=usecase7-dev -f redis/deployment.yaml
kubectl apply --namespace=usecase7-dev -f redis/service.yaml
kubectl apply --namespace=usecase7-dev -f api/secrets.yaml
kubectl apply --namespace=usecase7-dev -f api/deployment.yaml
kubectl apply --namespace=usecase7-dev -f api/service.yaml


kubectl create namespace storage-api-playground
kubectl apply --namespace=storage-api-playground -f redis/deployment.yaml
kubectl apply --namespace=storage-api-playground -f redis/service.yaml
kubectl apply --namespace=storage-api-playground -f api/secrets.yaml
kubectl apply --namespace=storage-api-playground -f api/deployment.yaml
kubectl apply --namespace=storage-api-playground -f api/service.yaml
kubectl apply --namespace=storage-api-playground -f api-doc/deployment.yaml
kubectl apply --namespace=storage-api-playground -f api-doc/service.yaml
