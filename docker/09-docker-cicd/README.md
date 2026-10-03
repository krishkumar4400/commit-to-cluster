# Docker CI/CD

## Level 9

### Pipeline

```Plain text
Developer
   ↓
Git push
   ↓
GitHub Actions
   ↓
Test
   ↓
Build Docker image
   ↓
Scan image
   ↓
Tag image
   ↓
Push registry
   ↓
Deploy
```

Build:

```Plain text
Spring Boot API
       +
PostgreSQL
```

Pipeline:

```Plain text
GitHub
 ↓
GitHub Actions
 ↓
Maven tests
 ↓
Docker build
 ↓
Docker image scan
 ↓
Docker registry
 ↓
EC2
 ↓
Docker Compose
```

Include:

- environment variables
- secrets
- healthcheck
- rollback strategy
- versioned image tags
