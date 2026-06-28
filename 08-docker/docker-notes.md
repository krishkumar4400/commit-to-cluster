# 🐳 Docker Notes

## Table of Contents

1. [Introduction](#introduction)
2. [Docker CLI — Basic Commands](#docker-cli--basic-commands)
3. [Working with Images](#working-with-images)
4. [Working with Containers](#working-with-containers)
5. [Dockerfile & Containerizing Apps](#dockerfile--containerizing-apps)
6. [Port Mapping](#port-mapping)
7. [Publishing Images to Docker Hub](#publishing-images-to-docker-hub)
8. [Multi-Stage Builds](#multi-stage-builds)
9. [Environment Variables](#environment-variables)
10. [Docker Networking](#docker-networking)
11. [Docker Volumes](#docker-volumes)
12. [Quick Command Reference](#quick-command-reference)

---

## Introduction

> 👉 Docker eliminates environment inconsistency by packaging applications with their dependencies into lightweight containers that run consistently across systems.

Software runs on top of an operating system. Traditionally, differences in OS environments and dependencies cause issues like *"it works on my machine."* Docker solves this by packaging the application along with its dependencies into **containers**, which provide a consistent runtime environment — without requiring a full OS like a Virtual Machine does.

**Key concepts:**

- **Image** — A read-only template/blueprint used to create containers.
- **Container** — A running instance of an image. Isolated and lightweight.
- **Docker Engine** — The runtime that builds and runs containers.
- **Docker CLI** — The command-line tool used to interact with the Docker daemon.

---

## Docker CLI — Basic Commands

```bash
# Check Docker version
docker version

# View system-wide Docker info
docker info

# Get help for any command
docker run --help
docker ps --help
```

---

## Working with Images

```bash
# List all local images
docker images
docker image ls

# Pull / download an image
docker pull alpine
docker image pull alpine

# Inspect an image
docker image inspect busybox

# Remove an image
docker image rm alpine
docker rmi alpine

# Remove all unused (pruned) images
docker image prune
```

> ⚠️ Before removing an image, remove all containers using that image first.

---

## Working with Containers

### Listing Containers

```bash
# List only running containers
docker ps
docker container ls

# List ALL containers (running + stopped)
docker ps -a
```

### Creating & Running Containers

```bash
# Create and run a container interactively
docker run -it ubuntu
docker run -it alpine
docker run -it busybox

# Run a container with a custom name
docker run -it --name my-container alpine

# Run a command inside a container
docker run -it ubuntu ls
docker run -it ubuntu bash
docker run -it busybox ping google.com
```

### Starting, Stopping & Removing

```bash
# Stop a running container
docker stop <container_id>

# Kill a container immediately
docker kill <container_id>

# Start a stopped container
docker start <container_id>

# Remove a container
docker rm <container_id>
docker container rm <container_id>

# Force remove a running container
docker rm -f <container_id>
docker rm --force <container_id>

# Auto-remove container when it stops
docker run -it --rm alpine
```

### Running in Background (Detached)

```bash
# Run in background (-d = detach)
docker run -itd -P my-app

# Run in background and auto-remove on stop
docker run -itd -P --rm my-app
```

### Executing Commands in a Running Container

```bash
docker exec <container_name> ping <target>
```

---

## Dockerfile & Containerizing Apps

A **Dockerfile** is a configuration file that defines how to build a Docker image. Each instruction in a Dockerfile is called a **layer**. Docker caches layers — if a layer hasn't changed, it reuses the cache, making builds faster.

### Example 1 — Ubuntu base (verbose)

```dockerfile
# Base Image
FROM ubuntu

# Install Node.js
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt-get install -y nodejs

# Copy source code
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

WORKDIR /home/app

RUN npm install
```

### Example 2 — Alpine base (optimized) ✅ Preferred

```dockerfile
# Base Image — lightweight Node.js on Alpine Linux
FROM node:20.17.0-alpine3.19

# Copy source code
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

WORKDIR /home/app

RUN npm install
```

> Alpine is much smaller and faster. Many commands like `bash` and `ls` are intentionally absent — it only includes what's necessary to run Node.js.

### Build & Run a Custom Image

```bash
# Build image from Dockerfile in current directory
docker build -t my-app .

# List images to verify
docker images

# Run the image
docker run -it my-app
```

### Dockerfile Best Practices

- Keep image size **as small as possible**
- Choose a **minimal and specific base image** (prefer Alpine variants)
- Be mindful of **layer order** — put rarely-changing steps (like `npm install`) after frequently-changing ones (like `COPY`) to maximize cache hits
- Layer caching: if a layer changes, all subsequent layers are rebuilt

---

## Port Mapping

Containers are isolated — you need to map container ports to host ports to access them.

```bash
# Map host port 8000 → container port 8000
docker run -it -p 8000:8000 my-app

# Map host port 5000 → container port 8000
docker run -it -p 5000:8000 my-app

# Auto port mapping (uses EXPOSE in Dockerfile)
docker run -it -P my-app
```

> **Format:** `-p HOST_PORT:CONTAINER_PORT`

To enable auto port mapping, add this to your Dockerfile:

```dockerfile
EXPOSE 8000
```

---

## Publishing Images to Docker Hub

[hub.docker.com](https://hub.docker.com) — the GitHub for Docker images (Container Registry).

```bash
# Build with your Docker Hub username
docker build -t username/node-application .

# Push to Docker Hub
docker push username/node-application

# Tag an existing image
docker tag my-app username/node-application
docker tag my-app username/node-application:v1

# Push a specific tag
docker push username/node-application:v1

# Pull and run from Docker Hub (anyone can do this)
docker run -it -P username/node-application
```

---

## Multi-Stage Builds

Multi-stage builds let you use multiple `FROM` statements in a Dockerfile to create leaner production images.

```bash
# Build using the old Dockerfile
docker build -t ts-app-old -f Dockerfile.old .

# Build using the new (multi-stage) Dockerfile
docker build -t ts-app-new .
```

---

## Environment Variables

```bash
# Pass a single env variable
docker run -it -p 3000:3000 -e PORT=3000 ts-app-new

# Pass multiple env variables
docker run -it -p 8000:3000 -e PORT=3000 -e MONGO_URI=x -e JWT_SECRET=y ts-app-new

# Load env variables from a .env file
docker run -it -p 8000:3000 --env-file=./.env ts-app-new
```

You can also set a default value in the Dockerfile:

```dockerfile
ENV PORT=8000
```

---

## Docker Networking

### How Containers Access the Internet

When Docker installs, it creates a virtual network interface called the **bridge network**. Every container that spins up is automatically connected to this bridge network — giving it its own subnet and IP address, allowing internet access through the host machine.

```bash
# List all Docker networks
docker network ls

# Inspect the default bridge network
docker network inspect bridge

# Run a container and inspect its network
docker run -itd --name=my-container --rm busybox
docker network inspect bridge
```

### Why Networking Matters (Microservices Example)

```
[ Node.js App ] ←→ [ Redis ]
       ↓
[ PostgreSQL ]
```

In a microservice architecture, containers on the same network can communicate via private IP — no need to expose Redis or PostgreSQL to the public internet. Only the Node.js server needs to be publicly accessible.

### Default Bridge vs. User-Defined Bridge

| Feature | Default Bridge | User-Defined Bridge |
|---|---|---|
| DNS resolution by name | ❌ No | ✅ Yes |
| Isolation | Shared | Custom / isolated |
| Recommended for production | ❌ | ✅ |

> In the **default bridge**, containers can only ping each other by IP address, not by name.

### Creating a Custom Bridge Network

```bash
# Create a custom network
docker network create milkyway

# Run a container on the custom network
docker run -itd --network=milkyway --rm --name=spiderman busybox

# Connect an existing container to a network
docker network connect milkyway <container_id>

# Disconnect from a network
docker network disconnect milkyway my-container

# Inspect a custom network
docker network inspect milkyway
```

### No Networking Mode

```bash
# Completely disable networking for a container
docker run -it --network=none --rm busybox
```

---

## Docker Volumes

Volumes allow data to **persist** beyond the life of a container, or to be **shared** between the host machine and the container.

### Host Volume (Bind Mount)

Mount a folder from your host machine into the container.

```bash
# Syntax: -v HOST_PATH:CONTAINER_PATH
docker run -it --rm -v C:\Users\username\Downloads\my-data:/home/ubuntu/data ubuntu
```

This lets you use Ubuntu-specific features while storing data on your actual machine — data survives even after the container stops.

### Named Volumes

Named volumes are managed by Docker and are the preferred way to persist data.

```bash
# Docker manages the storage location
docker volume create my-volume
docker run -it -v my-volume:/home/app/data my-app
```

---

## Quick Command Reference

### `docker ps`

| Command | Description |
|---|---|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |

### `docker image`

| Command | Description |
|---|---|
| `docker images` | List all images |
| `docker image rm <id>` | Remove an image |
| `docker image prune` | Remove unused images |
| `docker image pull <name>` | Pull an image |
| `docker image inspect <name>` | Inspect image details |

### `docker run`

| Command | Description |
|---|---|
| `docker run -it <image>` | Run interactively |
| `docker run -itd <image>` | Run in background |
| `docker run --rm <image>` | Auto-remove on stop |
| `docker run -p H:C <image>` | Map host:container port |
| `docker run -P <image>` | Auto map exposed ports |
| `docker run -e KEY=VAL <image>` | Set env variable |
| `docker run -v H:C <image>` | Bind mount volume |
| `docker run --name <n> <image>` | Set container name |
| `docker run --network=<n> <image>` | Connect to network |

### `docker network`

| Command | Description |
|---|---|
| `docker network ls` | List networks |
| `docker network create <name>` | Create a network |
| `docker network inspect <name>` | Inspect a network |
| `docker network connect <net> <c>` | Connect container to network |
| `docker network disconnect <net> <c>` | Disconnect container |

---
---
---

# 🐳 Docker Compose, Orchestration & AWS Deployment — Complete Notes

> **Who is this for?** Developers learning Docker beyond basics — from local dev environments to production-grade AWS deployments. Interview points are highlighted with 🎯.

---

## Table of Contents

1. [Docker Compose](#1-docker-compose)
2. [Docker Volumes — Custom Named Volumes](#2-docker-volumes--custom-named-volumes)
3. [Docker Orchestration](#3-docker-orchestration)
4. [AWS ECR — Elastic Container Registry](#4-aws-ecr--elastic-container-registry)
5. [AWS ECS — Elastic Container Service](#5-aws-ecs--elastic-container-service)
6. [CloudFront CDN Setup](#6-cloudfront-cdn-setup)
7. [Rolling Deployments](#7-rolling-deployments)
8. [Cleanup Checklist](#8-cleanup-checklist)
9. [Interview Cheat Sheet](#9-interview-cheat-sheet)

---

## 1. Docker Compose

### What Is Docker Compose?

Docker Compose is an **official Docker tool** that lets you define and run multi-container applications using a single YAML configuration file (`docker-compose.yml`). With one command, you can spin up your **entire infrastructure**, and with another, take it all down cleanly.

> Think of it as a blueprint for your local development environment.

---

### The Problem It Solves

Imagine you're building an app that depends on **Redis** and **PostgreSQL**. Without Docker Compose, every developer on your team must:

- Manually install Redis and PostgreSQL on their machine
- Install the **exact same versions** (e.g., Postgres 14, not 16)
- Repeat this setup for every new team member who joins
- Manage conflicts with other projects that need different versions

```
❌ Without Docker Compose:
  Dev A: Postgres 14 ✅
  Dev B: Postgres 16 ❌ (app breaks)
  New joiner: "Which version do I install?" 😵
```

```
✅ With Docker Compose:
  Everyone runs: docker compose up
  Same versions. Every time. Done.
```

---

### Architecture: What Docker Compose Creates

```
┌─────────────────────────────────────────────────────┐
│               docker-compose.yml                    │
│                                                     │
│  services:                                          │
│    backend:   ──────────────────────────────────►  │─┐
│    postgres:  ──────────────────────────────────►  │ │
│    redis:     ──────────────────────────────────►  │ │
└─────────────────────────────────────────────────────┘ │
                                                        │
                        ▼                               │
┌─────────────────────────────────────────────────────┐ │
│              Default Docker Network                  │◄┘
│   (All containers can talk to each other by name)   │
│                                                     │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐        │
│  │ backend  │◄─►│ postgres │◄─►│  redis   │        │
│  │ :8000    │   │ :5432    │   │  :6379   │        │
│  └──────────┘   └──────────┘   └──────────┘        │
└─────────────────────────────────────────────────────┘
```

> 🎯 **Interview Point:** When you run `docker compose up`, Docker automatically creates a **default bridge network**. All containers in the same Compose file can communicate with each other using their **service name** as the hostname (e.g., `postgres://postgres:5432`).

---

### Running Your App Inside Docker Compose — 2 Approaches

#### Approach 1: Push to Docker Hub (Overkill for Dev)

```
Local Code → Build Image → Push to Docker Hub → Pull in docker-compose.yml
```

**Problem:** Every time you change your source code, you have to push to the cloud and pull it back. This is too slow for active development.

#### Approach 2: Build Locally Using Dockerfile (Recommended for Dev) ✅

Instead of specifying an `image:` in your service, you use `build:` to point to your local `Dockerfile`. Docker Compose reads the Dockerfile, builds a local image, and runs the container — all in one step.

```yaml
# docker-compose.yml example
version: "3.8"
services:
  backend:
    build: .          # Reads the Dockerfile in current directory
    ports:
      - "8000:8000"
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7

volumes:
  pgdata:

```

---

### Essential Docker Compose Commands

| Command | What It Does |
|---|---|
| `docker compose up` | Start all services (foreground, shows logs) |
| `docker compose up -d` | Start in **detached mode** (runs in background) |
| `docker compose down` | Stop and remove containers + default network |
| `docker compose up --build` | **Force rebuild** the image (use after code changes) |
| `docker compose logs -f` | Follow logs from all services |
| `docker compose ps` | Show running services |
| `docker compose exec <service> sh` | Shell into a running container |

> 🎯 **Interview Point:** `docker compose up` vs `docker compose up --build`
>
> - `up` reuses the existing image if it exists
> - `up --build` forces Docker to rebuild the image from your Dockerfile — **required after source code changes** when using the `build:` directive

---

### Networking in Docker Compose

```
docker compose up
  └── Creates a default network: <project-name>_default
        └── All services join this network automatically
              └── Services can reach each other by service name
                    e.g., your backend connects to postgres via hostname "postgres"
```

> 🎯 **Interview Point:** Docker Compose uses DNS-based service discovery. Inside the network, container hostnames are the service names defined in `docker-compose.yml`. So `redis://redis:6379` works automatically without hardcoding IPs.

---

## 2. Docker Volumes — Custom Named Volumes

### The Problem: Container Data is Ephemeral

When a container is deleted, **all its data is gone** by default. Volumes solve this by persisting data outside the container's lifecycle.

### Types of Volumes

| Type | Description | Use Case |
|---|---|---|
| Anonymous Volume | Created automatically, no name | Throwaway data |
| **Named Volume** | You give it a name | **Databases, persistent app data** ✅ |
| Bind Mount | Maps a host directory | Dev hot-reload |

---

### Creating and Using Custom Named Volumes

```bash
# List all volumes
docker volume ls

# Create a named volume
docker volume create custom-data

# Verify it was created
docker volume ls | grep custom

# Run a container with the named volume mounted
docker run -it --rm -v custom-data:/home/server/custom ubuntu

# Inside the container, the volume is at /home/server/custom
# Files created here SURVIVE container deletion
ls /home/server/custom
# busybox.txt  index.txt  secret.txt
```

### Volume Architecture

```
Docker Host
├── /var/lib/docker/volumes/
│     └── custom-data/          ← Named volume (lives on host)
│           └── _data/
│                 ├── busybox.txt
│                 ├── index.txt
│                 └── secret.txt
│
└── Container
      └── /home/server/custom   ← Mounted inside container
            (mirrors the volume above)

Container is deleted → Volume STAYS
New container mounts the same volume → Data is THERE ✅
```

> 🎯 **Interview Point:** Named volumes persist even after `docker compose down`. To also remove volumes, use `docker compose down -v`. This is critical for database containers — always use named volumes so your data survives restarts.

---

## 3. Docker Orchestration

### Manual Container Management — The Pain

When you're running containers manually in production, you have to handle all of this yourself:

```
Traffic Spikes → Manually spin up more containers
Traffic Drops → Manually kill extra containers
Container crashes → Manually detect, kill, and restart it
Load increases → Manually configure NGINX load balancer
Need logs? → SSH into each container separately
```

This becomes **completely unmanageable** at scale. Even a team of engineers can't do this reliably 24/7.

---

### What Docker Orchestration Actually Means

Docker Orchestration = **automated management of containerized applications at scale**.

It handles:

```
┌─────────────────────────────────────────────┐
│         Docker Orchestration                │
│                                             │
│  ✅ Auto-scale up when traffic increases    │
│  ✅ Auto-scale down when traffic drops      │
│  ✅ Restart crashed containers              │
│  ✅ Load balance traffic across containers  │
│  ✅ Centralize logs (e.g., to Grafana)      │
│  ✅ Rolling deployments (zero downtime)     │
│  ✅ Health monitoring                       │
└─────────────────────────────────────────────┘
```

---

### Orchestration Tools

| Tool | Type | Best For |
|---|---|---|
| **Kubernetes (K8s)** | Open source | Large scale, full control |
| **AWS ECS** | Managed (AWS) | AWS-native, simpler than K8s |
| **AWS EKS** | Managed K8s (AWS) | Kubernetes on AWS |
| **Google Cloud Run** | Serverless containers | Event-driven, auto-scaling |
| **Docker Swarm** | Built-in Docker | Small scale, simple setup |

> 🎯 **Interview Point — Key Orchestration Concepts:**
>
> - **Scalability:** Auto-scale containers based on CPU/memory/traffic
> - **Self-healing:** If a container crashes, the orchestrator detects it and spins up a replacement automatically
> - **Rolling Updates:** Deploy new versions without downtime — new containers come up, old ones come down gracefully
> - **Service Discovery:** Containers find each other automatically without hardcoded IPs
> - **Load Balancing:** Automatically distributes traffic across healthy containers

---

### Challenges of Orchestration

| Challenge | Explanation |
|---|---|
| Complexity | Kubernetes has a steep learning curve |
| Resource Overhead | Orchestration systems themselves use CPU/RAM |
| Security Risks | Misconfiguration can expose containers |
| Vendor Lock-in | AWS ECS/EKS ties you to AWS infrastructure |

---

## 4. AWS ECR — Elastic Container Registry

### What Is ECR?

**ECR = Amazon's version of Docker Hub.**

It's a fully managed Docker image registry hosted on AWS. When your entire infrastructure lives on AWS, storing your images on ECR keeps everything within the AWS ecosystem (better security, no egress fees, IAM integration).

```
Docker Hub (Public)         AWS ECR (Private, AWS-native)
─────────────────           ──────────────────────────────
hub.docker.com              <account>.dkr.ecr.<region>.amazonaws.com
Public by default           Private by default
No IAM integration          Full IAM access control
3rd party                   Same AWS account = fast pulls
```

---

### ECR Flow

```
Local Machine                          AWS Cloud
─────────────────────                  ──────────────────────────────
                                       ┌──────────────────────────┐
Node.js App                            │   ECR Registry           │
    │                                  │                          │
    ▼                                  │  094235602404.dkr.ecr.   │
docker build -t myapp .    ──push──►  │  ap-south-1.amazonaws.   │
    │                                  │  com/backend:latest      │
    ▼                                  └──────────────────────────┘
Docker Image (local)                           │
                                               │ pull (by ECS)
                                               ▼
                                        ECS Containers 🐳
```

---

### Step-by-Step: Push an Image to ECR

```bash
# 1. Authenticate Docker to ECR (get from "View push commands" in AWS console)
aws ecr get-login-password --region ap-south-1 | \
  docker login --username AWS --password-stdin \
  094235602404.dkr.ecr.ap-south-1.amazonaws.com

# 2. Build your image locally
docker build -t backend .

# 3. Tag it for ECR (format: <ecr-uri>/<repo-name>:<tag>)
docker tag backend:latest \
  094235602404.dkr.ecr.ap-south-1.amazonaws.com/backend:latest

# 4. Push to ECR
docker push \
  094235602404.dkr.ecr.ap-south-1.amazonaws.com/backend:latest
```

> 🎯 **Interview Point:** ECR uses **IAM roles** for authentication, not usernames/passwords. The `aws ecr get-login-password` command generates a temporary token valid for 12 hours. In CI/CD pipelines (like GitHub Actions), you grant the pipeline an IAM role with ECR push permissions — no hardcoded credentials.

---

## 5. AWS ECS — Elastic Container Service

### ECS vs ECR — One-Line Difference

> **ECR = Store images. ECS = Run and manage containers.**

---

### ECS Architecture — How It All Fits Together

```
┌────────────────────────────────────────────────────────────────┐
│                        AWS ECS                                 │
│                                                                │
│  ┌──────────────────── Cluster ─────────────────────────┐     │
│  │  (Logical grouping, e.g., "production", "staging")   │     │
│  │                                                       │     │
│  │  ┌──────────── Service ────────────┐                 │     │
│  │  │  (e.g., "api-service")          │                 │     │
│  │  │  Uses → Task Definition         │                 │     │
│  │  │                                 │                 │     │
│  │  │  ┌─────────┐ ┌─────────┐        │                 │     │
│  │  │  │Container│ │Container│ ...    │                 │     │
│  │  │  │  (Task) │ │  (Task) │        │                 │     │
│  │  │  └─────────┘ └─────────┘        │                 │     │
│  │  └─────────────────────────────────┘                 │     │
│  │                                                       │     │
│  │  ┌──────────── Service ────────────┐                 │     │
│  │  │  (e.g., "queue-consumer")       │                 │     │
│  │  │  Desired: 3, Max: 10            │                 │     │
│  │  └─────────────────────────────────┘                 │     │
│  └───────────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────────┘
          │                        │
          ▼                        ▼
  Application Load            ECR (pulls images)
  Balancer (ALB)
          │
          ▼
   CloudFront CDN
          │
          ▼
       Internet 🌍
```

---

### The 3 Core ECS Concepts

#### 1. Cluster

A **logical grouping** of services. Think of it like a folder.

- One cluster for production, one for dev/staging
- A cluster itself doesn't run anything — services inside do

#### 2. Task Definition

A **blueprint/configuration** that tells ECS:

- Which Docker image to pull (and from where — ECR URI)
- How much CPU and memory to allocate
- Which ports to expose
- Environment variables
- Health check commands
- Log configuration (CloudWatch)

> 🎯 **Interview Point:** A Task Definition is **immutable** — you create new revisions, you don't edit old ones. ECS always runs a specific revision of a task definition.

#### 3. Service

The **runtime manager** that keeps your containers alive. You tell it:

- Which Task Definition to use
- How many containers (desired count) to run
- When to scale up/down (CPU threshold)
- Which load balancer to attach

The service ensures your **desired state** is always maintained.

---

### Service Auto-Scaling Configuration

```
Service Config:
├── Desired Tasks: 2         ← Normal baseline
├── Minimum Tasks: 2         ← Never go below this
├── Maximum Tasks: 5         ← Never exceed this
└── Scale-up trigger:
      Metric: Avg CPU Utilization
      Threshold: 70%
      Action: Add 1 container
```

```
Traffic Load    → Container Count
─────────────────────────────────
Low traffic     → 2 containers (minimum)
CPU hits 70%   → 3 containers (auto-scaled)
CPU hits 70%   → 4 containers (again)
Traffic drops   → Back to 2 (scale-in)
```

---

### What ECS Creates Automatically

When you create a service with a load balancer, ECS automatically provisions:

```
✅ ECS Containers (Tasks)
✅ Application Load Balancer (ALB)
✅ Target Groups (routes traffic to healthy containers)
✅ Security Groups (network firewall rules)
✅ Auto Scaling policies
✅ CloudFormation stack (all infra as code)
✅ VPC networking
```

> 🎯 **Interview Point:** ECS uses **AWS Fargate** as a serverless compute engine — you don't manage EC2 instances at all. Fargate handles the underlying VM, OS patches, and scaling of the host machines. You only pay per container's CPU/memory usage. This is the main advantage over running your own EC2 instances.

---

### Step-by-Step: Full ECS Setup

#### Step 1 — Create a Cluster

```
AWS Console → ECS → Clusters → Create Cluster
  Name: my-production-cluster
  Infrastructure: AWS Fargate (serverless)
  Monitoring: Enable Container Insights ✅
```

#### Step 2 — Create a Task Definition

```
ECS → Task Definitions → Create New
  Name: backend-task
  Launch type: AWS Fargate
  CPU: 0.5 vCPU | Memory: 1 GB

  Container:
    Name: backend
    Image URI: 094235602404.dkr.ecr.ap-south-1.amazonaws.com/backend:latest
    Port: 8000
    Health check: CMD-SHELL curl -f http://localhost:8000/health || exit 1
    Interval: 30s
    Log config: AWS CloudWatch
```

#### Step 3 — Create a Service

```
Cluster → Services → Create
  Launch type: Fargate
  Task definition: backend-task (latest revision)
  Service name: backend-service
  Desired tasks: 2

  Load Balancing:
    Type: Application Load Balancer (ALB)
    Container port: 8000
    LB port: 80
    Health check path: /health

  Auto Scaling:
    Min tasks: 2
    Max tasks: 5
    Metric: ECSServiceAverageCPUUtilization
    Target: 70%
```

---

## 6. CloudFront CDN Setup

### What Is CloudFront?

CloudFront is AWS's **Content Delivery Network (CDN)**. It distributes your app to **edge locations** worldwide (Mumbai, USA, Frankfurt, Singapore...) so users get low-latency responses from the nearest location.

```
User in Delhi   → CloudFront Mumbai edge  → Load Balancer → ECS Containers
User in London  → CloudFront Frankfurt   → Load Balancer → ECS Containers
User in NYC     → CloudFront N. Virginia → Load Balancer → ECS Containers
```

Without CloudFront, all users hit your load balancer in one region — high latency for distant users.

---

### Full Request Flow with CloudFront

```
Internet User
     │
     ▼
CloudFront CDN (Edge Location)
     │  HTTPS → HTTP (origin protocol)
     ▼
Application Load Balancer (ALB)
     │
     ├──► Container 1 (ECS Task)
     ├──► Container 2 (ECS Task)  ← Load balanced
     └──► Container 3 (ECS Task)
                │
                ▼ (pulls from)
              ECR Image Registry
```

### CloudFront Setup Steps

```
AWS Console → CloudFront → Create Distribution
  Origin domain: <your-alb-dns>.elb.amazonaws.com
  Protocol: HTTP only (ALB → CloudFront)
  Viewer protocol: Redirect HTTP to HTTPS (CloudFront → User)
  WAF: Disable (enable for production security)
  → Create Distribution
```

> 🎯 **Interview Point:** CloudFront caches responses at edge nodes. For APIs (dynamic content), you typically **disable caching** or set very short TTLs. For static assets (images, JS, CSS), CloudFront caching dramatically reduces origin load and improves performance.

---

## 7. Rolling Deployments

### How Zero-Downtime Updates Work

When you push new code and trigger a redeployment:

```
Before update:          During update:          After update:
─────────────          ───────────────          ─────────────
Container v1 ✅         Container v1 ✅           Container v2 ✅
Container v1 ✅         Container v1 ✅           Container v2 ✅
                        Container v2 ✅   ← NEW
                        (v2 health check passes)
                        Container v1 ❌   ← OLD killed
                        Container v1 ❌   ← OLD killed
```

Traffic is **never interrupted** — new containers serve traffic before old ones are terminated.

---

### Deploy New Code to ECS

```bash
# 1. Make changes to your code

# 2. Build new image
docker build -t backend .

# 3. Tag and push to ECR
docker tag backend:latest \
  094235602404.dkr.ecr.ap-south-1.amazonaws.com/backend:latest
docker push \
  094235602404.dkr.ecr.ap-south-1.amazonaws.com/backend:latest

# 4. Go to ECS Console:
#    Clusters → Your Cluster → Services → Your Service
#    → Update Service → Force New Deployment → Update
```

ECS will pull the new image and do a rolling replacement automatically.

---

### What Happens if the New Container is Unhealthy?

```
New container fails health check
         │
         ▼
ECS keeps OLD containers running
         │
         ▼
Kills the NEW (unhealthy) container
         │
         ▼
Traffic never hits the broken version ✅
```

> 🎯 **Interview Point:** This is why **health check endpoints** (`GET /health`) are critical. ECS won't route traffic to a new container until it passes health checks. If it never passes, the old version stays running — **automatic rollback**.

---

## 8. Cleanup Checklist

> ⚠️ **IMPORTANT:** AWS charges for running resources. Always clean up after testing.

```
Cleanup Order (must follow this sequence):

1. ☐ Disable CloudFront distribution
2. ☐ Delete CloudFront distribution (wait ~15 min after disable)
3. ☐ Update ECS Service → Set Desired Tasks to 0 (containers killed)
4. ☐ Delete ECS Service
5. ☐ Delete ECS Task Definition (can't be deleted, just deregister)
6. ☐ Delete ECS Cluster
7. ☐ Go to EC2 → Load Balancers → Delete ALB
8. ☐ Go to EC2 → Target Groups → Delete target groups
9. ☐ Go to ECR → Delete repository (deletes all stored images)
```

---

## 9. Interview Cheat Sheet

### Docker Compose

| Question | Answer |
|---|---|
| What does `docker compose up` do? | Starts all services, creates a default network, containers can talk by service name |
| Difference between `up` and `up --build`? | `--build` forces image rebuild from Dockerfile before starting |
| What is a default network in Compose? | An auto-created bridge network where services discover each other by name |
| How do you run a container in background? | `docker compose up -d` (detached mode) |
| How do containers in the same Compose file communicate? | Via service name as hostname over the auto-created Docker network |

### Docker Volumes

| Question | Answer |
|---|---|
| What's the difference between named volumes and bind mounts? | Named volumes are managed by Docker (persist independently); bind mounts link to a host path |
| Does `docker compose down` delete volumes? | No. You need `docker compose down -v` to also remove volumes |
| Why use volumes for databases? | Container filesystem is ephemeral — volumes ensure data survives restarts/recreation |

### Docker Orchestration

| Question | Answer |
|---|---|
| What is Docker orchestration? | Automated management of containers — scaling, healing, load balancing, logging |
| Name 3 orchestration tools | Kubernetes, AWS ECS, Google Cloud Run |
| What is self-healing? | Automatically restarting crashed containers to maintain desired state |
| What is a rolling deployment? | Gradually replacing old containers with new ones without downtime |

### AWS ECR / ECS

| Question | Answer |
|---|---|
| What is ECR? | AWS-managed Docker image registry (like Docker Hub, but private and AWS-native) |
| What is the difference between ECR and ECS? | ECR stores images; ECS runs and manages containers |
| What is a Task Definition? | A blueprint for your container — image URI, CPU, memory, ports, env vars, health check |
| What is a Service in ECS? | Keeps a desired number of containers running, handles scaling and load balancing |
| What is AWS Fargate? | Serverless compute for ECS — no EC2 instances to manage, pay per container |
| What is CloudFront? | AWS CDN — distributes your app to global edge locations for low latency |
| What happens if new ECS container fails health check? | ECS keeps old containers running and kills the unhealthy new one (automatic rollback) |

---

> 📌 **Quick Mental Model:**
>
> ```
> docker-compose.yml → local dev environment
> ECR               → image storage (cloud Docker Hub)
> ECS Task Def      → container blueprint
> ECS Service       → container lifecycle manager
> ALB               → traffic distributor
> CloudFront        → global CDN layer
> ```

---

*Made with ❤️ for developers learning DevOps — study this, understand the diagrams, and you'll ace any Docker/AWS interview.*
