docker run -it ubuntu

<!-- List all the running container -->
docker ps

<!-- docker ps - -->
  -a, --all     Show all containers (default shows running)
Aliases:
  docker container ls, docker container list, docker container ps, docker ps

<!-- do more with docker ps -->
docker ps --help

<!--  List images -->
docker images

<!-- to check docker version -->
docker version

docker info

<!-- docker run --help -->

<!-- create and run a new container from an image -->
docker run -it ubuntu(image)

<!-- to pull or download only an image for future purposes -->
docker pull image-name

<!-- docker cli -> used to interact with docker by running docker commands -->

<!-- commands related to docker image -->

<!-- delete an image -->
docker image rm alpine

<!-- but first we have to remove container using that image -->
docker container rm container_id

<!-- list all the images -->
docker image ls, docker images

<!-- remove all the pruned or unused images -->
docker image prune

<!-- pull or download an image -->
docker image pull alpine

<!-- commands related ot  docker container  -->
# docker container --help

# docker run --help

<!-- 1. list all the containers -->
docker ps -a

<!-- list only running containers -->
docker ps, docker container ls

<!-- stop running of a container -->
docker kill container_id

<!-- create and run container also specify name because docker gives default random name -->
docker run -it --name my-container alpine

<!-- remove a container -->
docker rm id, docker container rm id

<!-- remove running container -->
 docker rm --force 7daec13b5981,  docker rm -f 9c72c76b014d

#

docker run -it ubuntu ls
docker run -it ubuntu bash
docker run -it busybox ping google.com
docker run -it busybox - by default it goes inside sh (shell)
docker image inspect busybox

<!-- Creating and Using a Dockerfile to Containerize Node.js App -->
docker build -t my-app .
docker images
docker run -it my-app

# pwd to check the current dorectory

cat index.js
npm start

<!-- port mapping or exposing ports -->
<!-- run cutom image -->
docker run -it -p 8000:8000 my-app(image name)
<!-- also -->
docker run -it -p 5000:8000 my-app

<!-- on the host machine the 5000 port is mapped to the 8000 inside the container -->

<!-- Auto Port Mapping in Docker: Dynamic Exposure of Container Ports -->
// expose in Docker file then run -
docker run -it -P my-app

<!-- clean up - when i stop this container automatically remove this 
-->
docker run -it -P --rm  my-app

<!--  Run container in background and print container ID -->
docker run -itd -P my-app  

<!-- stop the container -->
docker stop 54380e277d63

<!-- start the container -->
docker start 54380e277d63

<!-- stop or kill the container -->
docker kill 54380e277d63

<!-- remove or delete the container -->
docker rm 54380e277d63

//////////
docker run -itd -P --rm my-app
docker ps
docker stop 89e2aa3b0788

//////////
docker run -itd -P --rm my-app
docker ps
docker kill e112a41018c7

////////
hub.docker.com
    Github for docker images - Container Registry

docker build -t krishkumar4400/node-application .
docker push krishkumar4400/node-application

docker run -it -P krishkumar4400/node-application

docker tag my-app krishkumar4400/node-application

docker tag my-app krishkumar4400/node-application:v1
docker push krishkumar4400/node-application:v1

<!-- for multi stage build -->
docker build -t ts-app-old -f Dockerfile.old .
docker build -t ts-app-new .

<!-- security best practices -->

<!-- giving environment variables -->
docker run -it -p 3000:3000 -e PORT=3000  ts-app-new
docker run -it -p 3000:3000 -e PORT=3000 -e PORT=5000 -e PORT=8000 ts-app-new -> not possible

docker run -it -p 8000:3000 -e PORT=3000 -e MONGO_URI=x -e JWT_SECRET=y  ts-app-new

// This will basically read whole env file and load those environment variables before running this application.
docker run -it -p 8000:3000 -e PORT=3000 --envfile=./.env ts-app-new

// at this time i now know
    - how to create custom docker images
    - how to work with custom images
    - how to publish those custom images
    - how to do multi stage builds
    - how to dockerize my application

