# Stage 1: Build dependencies
FROM node:22-alpine AS builder

# Install build tools for native modules (bcrypt, sharp, etc.)
RUN apk add --no-cache python3 make g++ 

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Stage 2: Final runtime image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app .

# Expose port (Express default: 3000)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
