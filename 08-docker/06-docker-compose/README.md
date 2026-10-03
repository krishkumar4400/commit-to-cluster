# Docker Compose

```yaml
services:
volumes:
networks:
environment:
env_file:
ports:
depends_on:
healthcheck:
restart:
build:
image:
command:
```

## Project #1 — MERN Docker Application

### Build

```plain text
React
   ↓
Node/Express
   ↓
MongoDB
```

### Architecture

```plain text
                 Browser
                    |
                    ↓
              React container
                    |
                    ↓
              API container
                    |
                    ↓
             MongoDB container
```

### Requirements

- custom network
- environment variables
- Mongo volume
- healthchecks
- restart policies
- separate Dockerfiles
- .dockerignore

### Step 1: Custom Network

```bash
docker network create mern-net
```

Step 3: .dockerignore

```text
node_modules
npm-debug.log
.env
```

### Step 4: docker-compose.yml

```yaml
version: "3.9"
services:
  frontend:
    build: ./frontend
    container_name: react-app
    ports:
      - "8080:80"
    networks:
      - mern-net
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost"]
      interval: 30s
      timeout: 10s
      retries: 3

  backend:
    build: ./backend
    container_name: node-api
    ports:
      - "3000:3000"
    env_file:
      - ./backend/.env
    networks:
      - mern-net
    depends_on:
      - mongodb
    restart: on-failure
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/v1/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  mongodb:
    image: mongo:6
    container_name: mongodb
    volumes:
      - mongo-data:/data/db
    networks:
      - mern-net
    restart: always
    healthcheck:
      test: ["CMD", "mongo", "--eval", "db.adminCommand('ping')"]
      interval: 30s
      timeout: 10s
      retries: 5

networks:
  mern-net:

volumes:
  mongo-data:
```

### Step 5: Environment Variables

```code
PORT=3000
MONGO_URI=mongodb://mongodb:27017/mydb
```
