FROM node:20-alpine AS builder

WORKDIR /home/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /home/app/dist usr/share/nginx/html

EXPOSE 80
