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
