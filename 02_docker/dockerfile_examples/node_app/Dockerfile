# # Base Image
# FROM ubuntu

# # Install curl and Node.js from NodeSource
# RUN apt-get update
# RUN apt install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh
# RUN bash /tmp/nodesource_setup.sh
# RUN apt install -y nodejs


# # copying the source code to docker image
# COPY server.js /home/app/index.js
# COPY package.json /home/app/package.json
# COPY package-lock.json /home/app/package-lock.json
# COPY .gitignore /home/

# WORKDIR /home/app

# RUN npm install


# optimized:-

# Base Image
# FROM node:20.17.0-alpine3.19

# WORKDIR /home/app
# # copying the source code to docker image
# COPY package*.json .

# RUN npm install

# COPY server.js index.js
# COPY .gitignore .
# COPY Dockerfile .

# # EXPOSE 8000

# # exposing multiple ports
# # EXPOSE 8000 8001 8002 8003 8004 8005

# # exposing a range of ports
# EXPOSE 8000-8009

# CMD [ "npm", "run", "dev" ]

