


# Auth Service
   ``` tsc --init ```
   ```npm install typescript ts-node-dev express @types/express```
   ``` npm install express-validator```
   # Setting up Kubernetes Infrastructure Stuff:
     - Create a Dockerfile
     - Create a .dockerignore file to ignore the node_modules
     - Build the Image ```docker build -t deretoluwani/auth . ```
  ## Kubernetes
       - To get the Image loaded up in our Kubernetes Cluster, we are going to create a deployment;
       - it will create a set of pods for us automatically
       - Inside the deployment file, we also create a service (allow us to get access to a pod)
         - Deployment 
         - Service (ClusterIP)
   # Skaffold: 
    set up skaffold config file (watch our infra directory for changes) : 
    ```skaffold dev``` to start up the process
   # Ingress Nginx Setup/Configuration:
        - Routing Rules tie to Nginx
        - Has some routing rules that will direct traffic to the appropriate service
        - Anytime a request comes to a cluster, it will be handled by the ingress service, and it will be directed to the appropriate service within the cluster

     