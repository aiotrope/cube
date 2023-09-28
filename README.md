# cube
Container orchestration exercise

## CLI Commands

```bash
# after installing minikube & kubectl
# start a cluster
$ minikube start

# start a new terminal, and leave this running
$ minikube dashboard

# build the main app image 
$ cd hello-minikube-app/ && minikube image build -t hello-minikube-app -f ./Dockerfile .

# check available minikube; ensure that docker.io/library/hello-minikube-app:latest is present in the list
$ minikube image list

# deploy the app
$ kubectl apply -f kubernetes/hello-minikube-app-deployment.yaml 

# check current deployment
$ kubectl get deployments

# list the pods
$ kubectl get pods
# output
# hello-minikube-app-deployment-5c49757765-68ndt

# check the logs of the pods e.g
$ kubectl logs hello-minikube-app-deployment-5c49757765-68ndt
# e.g output
# Listening on http://localhost:7777/

# deploy the services and exposing the application
$ kubectl apply -f kubernetes/hello-minikube-app-service.yaml 

# chech services
$ kubectl get services

# access the application
$ minikube service hello-minikube-app-service --url
# check the url e.g http://127.0.0.1:50755

# cleaning up; delete services and deployment
$ kubectl delete -f kubernetes/hello-minikube-app-service.yaml && kubectl delete -f kubernetes/hello-minikube-app-deployment.yaml 

# delete minikube
$ minikube delete

# clean slate
$ minikube delete && docker system prune -a && docker images prune -a && && docker volume prune -a

```
