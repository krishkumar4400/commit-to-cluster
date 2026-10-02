# Docker Images

## Level 2

### Image vs Container

### image layers

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
```

Docker doesn't simply create one giant blob.

Conceptually:

```plain text
Layer 4 → application source
Layer 3 → dependencies
Layer 2 → filesystem changes
Layer 1 → base image
```

### run vs cmd vs entrypoint

### key concepts

- image layers
- immutable images
- writable container layer
- image caching
- layer reuse
