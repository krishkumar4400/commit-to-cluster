# Docker Fundamentals

## Level 1

### 1. Containers vs Virtual Machines

### 2. Docker architecture

### 3. Basic commands

```bash
docker version
docker info

docker pull
docker images
docker image ls

docker run
docker ps
docker ps -a

docker stop
docker start
docker restart

docker rm
docker rmi

docker logs
docker exec

docker inspect
docker stats
```

### Challenge #1

```bash
docker run nginx
```

## container commands

- docker build -t node-app .
- docker run --rm --name=node-app  -e PORT=4040 -p 4040:4040  node-app
- docker run --rm --name=node-app -p 4040:4040 -e PORT=4040 -e  NODE_ENV="development" node-app:v2
- docker exec -it node-app sh
- docker exec -it node-app ls
- docker run -d --rm --name=node-app -p 4040:4040 --env-file .env node-app

## docker compose commands

- docker compose up
- docker compose up -d
- docker compose down
- docker compose ps
- docker compose logs
- docker compose logs node-app
- docker compose logs -f node-app -- watch logs live of backend service
- docker compose logs -f  -- watch logs live of all services
- docker compose exec backend sh -- access shell of service
- docker compose build

## docker volume commands

- docker volume
- docker volume ls
- docker volume create custom-data
- docker volume ls | grep cus
- docker run -it --rm -v custom-data:/home/server/custom ubuntu ls: busybox.txt  index.txt  secret.txt

## Dockerfile

```Dockerfile
# Base Image
FROM node:20-alpine

WORKDIR /home/app

# Copying the source code to docker image 
COPY package* .
RUN npm install

COPY index.js index.js

COPY Dockerfile Dockerfile

# expose the ports
# EXPOSE 8000

# expose multiple ports
EXPOSE 8000 8001 8002 8003 8004

# expose ports in range
EXPOSE 8000-8009

# if any time anyone runs this image particularly run this command.
# this will be default command that will run when a developer will run this image 
# but we can also override it using -  docker run -it my-app bash // ls, cd, pwd etc
CMD [ "npm", "start" ]
```
