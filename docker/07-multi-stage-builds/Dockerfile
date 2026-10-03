# Stage 1: Build React app with Node
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build static files (Vite → dist/)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy only built static files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
