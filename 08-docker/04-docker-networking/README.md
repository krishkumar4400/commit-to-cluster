# Docker Networking

## Level 4

### Network Types

```plain text
bridge
host
none
custom bridge networks
```

### Challenge

Create:

```Plain text
container A
container B
```

A runs:

- Node API

B runs:

- MongoDB

Connect them using Docker networking.

API should not use:```localhost:27017```

Instead use the Mongo container/service name.
For example:```mongodb:27017```

### Step 1: Create a Docker Network

```bash
docker network create mynetwork
```

### Step 2: Run MongoDB Container

```bash
docker run -d --name mongodb --network mynetwork -p 27017:27017 mongo:6
```

### Step 3: Run Node.js API Container

```bash
docker run -d --name node-app --network mynetwork -p 3000:3000 --env-file .env node-app:latest
```

### .env

```code
MONGO_URI=mongodb://mongodb:27017/mydb
```

### Step 4: Verify Connection

```code
http://localhost:3000/api/v1/health
```
