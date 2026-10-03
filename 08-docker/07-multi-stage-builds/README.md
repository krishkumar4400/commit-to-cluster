# Multi-stage Builds and Image Optimization

## Challenge

Take a React application.

Build it with:

```Node```

but serve the final static files using:

```Nginx```

Final image should not contain Node/npm/source code unnecessarily.

## Workflow

### 1. Build image

```docker build -t react-nginx-app .```

### 2. Run container

```docker run -d -p 8080:80 react-nginx-app```

### 3. Access app at

```http://localhost:8080```
