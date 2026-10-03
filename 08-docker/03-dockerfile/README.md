# Dockerfile Mastery

## Level 3

```dockerfile
FROM
RUN
COPY
ADD
WORKDIR
ENV
ARG
EXPOSE
USER
ENTRYPOINT
CMD
HEALTHCHECK
VOLUME
LABEL
```

### Project 1

containerize Node.js application.

Requirements:

```plain text
Node app
↓
Dockerfile
↓
Docker image
↓
Container
↓
Browser
↓
Change source code
↓
rebuild image
↓
run new container
```

### Dockerfile

```Dockerfile
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
```

### 🔍 Step-by-Step Breakdown

#### 1. Multi-stage build

First stage (builder) installs dependencies and compiles native modules.

Second stage (runtime) is clean and lightweight, containing only what’s needed to run.

#### 2. apk add

Alpine doesn’t have build tools by default.

Adding python3 make g++ ensures native modules can compile.

#### 3. Layer caching

Copying package*.json first → Docker caches dependencies unless they change.

Speeds up rebuilds when you only change source code.

#### 4. Final image size

Using node:22-alpine keeps the runtime image small (~30 MB).

Only compiled dependencies + app code are copied in.

#### 5. Expose + CMD

EXPOSE 3000 documents the port.

CMD ["node", "server.js"] defines the startup command.

### 🚀 Workflow

#### 1. Build image

```bash
docker build -t my-node-app .
```

#### 2. Run container

```bash
docker run -p 3000:3000 my-node-app
```

#### 3. Change source code → rebuild image → run new container

```bash
docker run -p 3000:3000 my-node-app
docker run --rm --name=node-app --env-file .env  -p 3000:3000 node-app:latest
```

### debug commands

```bash
docker inspect
docker logs
docker exec
docker top
docker stats
```
