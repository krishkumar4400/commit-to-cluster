# Advanced Docker Challenges

## Challenge A

Application works locally but:
```fails inside Docker```

Find why.

## Challenge B

Application works with:
```docker run```

but fails with Compose.

Debug it.

## Challenge C

Application works in Compose but fails in Kubernetes.

Find the difference.

## Challenge D

Image is:
```1.8 GB```

Reduce it substantially.

## Challenge E

Container starts but exits immediately.

Debug without rebuilding the image.

## Challenge F

Two containers cannot communicate.
Debug:

```Plain text
DNS
network
ports
application binding
```

## Challenge G

Database data disappears after redeployment.
Fix persistence.

## Challenge H

Application has:

```Plain text
DB_PASSWORD
API_KEY
JWT_SECRET
```

Design a safer configuration system.

## Challenge I

Application consumes too much memory.

Investigate:

```Plain text
docker stats
process
heap
memory limits
```

## Challenge J

Your production image contains:

```Plain text
source code
dev dependencies
compiler
npm cache
secrets
```

Fix the image.
