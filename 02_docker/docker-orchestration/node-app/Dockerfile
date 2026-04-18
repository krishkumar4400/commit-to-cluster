# Base Image
FROM node:20-alpine

WORKDIR /home/app

RUN apk add --no-cache curl

# Copying the source code to docker image 
COPY package* .
RUN npm install

COPY index.js index.js

COPY Dockerfile Dockerfile

# expose ports in range
ENV PORT=8000
EXPOSE 8000

CMD [ "npm", "start" ]
