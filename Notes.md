# 🚀 DevOps — Complete Notes

> **Who is this for?** Anyone learning DevOps from scratch — students, developers moving into DevOps, or interview preppers.

---

## Table of Contents

1. [What is DevOps?](#1-what-is-devops)
2. [Why DevOps? — The Real Problems it Solves](#2-why-devops--the-real-problems-it-solves)
3. [Traditional vs DevOps](#3-traditional-vs-devops)
4. [The DevOps Lifecycle](#4-the-devops-lifecycle)
5. [SDLC — Software Development Life Cycle](#5-sdlc--software-development-life-cycle)
6. [CI/CD — The Heart of DevOps](#6-cicd--the-heart-of-devops)
7. [Build Concept](#7-build-concept)
8. [Containerization with Docker](#8-containerization-with-docker)
9. [Container Orchestration with Kubernetes](#9-container-orchestration-with-kubernetes)
10. [Cloud Fundamentals (AWS)](#10-cloud-fundamentals-aws)
11. [Infrastructure as Code (Terraform)](#11-infrastructure-as-code-terraform)
12. [Linux Fundamentals](#12-linux-fundamentals)
13. [Git & Version Control](#13-git--version-control)
14. [Networking Basics](#14-networking-basics)
15. [Monitoring & Logging](#15-monitoring--logging)
16. [DevSecOps — Security in DevOps](#16-devsecops--security-in-devops)
17. [Configuration Management (Ansible)](#17-configuration-management-ansible)
18. [Top Interview Questions](#18-top-interview-questions)

---

## 1. What is DevOps?

### Simple Definition

> **DevOps** is a culture + set of practices that **combines development (Dev) and operations (Ops)** to automate the software delivery process — enabling faster, reliable, and continuous releases.

### Breaking it Down

```
DEV  =  Writing code, building features
OPS  =  Deploying, running, scaling, maintaining apps

DevOps = removing the wall between these two teams
```

### The "Wall of Confusion" (Old Way)

```
┌─────────────────┐        🧱 WALL 🧱        ┌─────────────────┐
│   DEVELOPMENT   │  ───── throws code ────▶  │    OPERATIONS   │
│                 │  ◀──── "not my problem" ── │                 │
│  "It works on   │                            │  "It's broken   │
│   my machine!"  │                            │   in prod!"     │
└─────────────────┘                            └─────────────────┘
```

### The DevOps Way

```
┌────────────────────────────────────────────┐
│              ONE TEAM / ONE GOAL           │
│                                            │
│   Dev  +  Ops  +  Automation  =  DevOps   │
│                                            │
│   Build → Test → Deploy → Monitor → Repeat │
└────────────────────────────────────────────┘
```

### The Three Pillars of DevOps

```
        ┌──────────────┐
        │   CULTURE    │   ← Dev + Ops collaboration, shared ownership
        └──────┬───────┘
               │
        ┌──────▼───────┐
        │  AUTOMATION  │   ← CI/CD, scripts, IaC
        └──────┬───────┘
               │
        ┌──────▼───────┐
        │  PRACTICES   │   ← monitoring, testing, continuous feedback
        └──────────────┘
```

> 🧠 **Interview One-liner:**  
> *"DevOps is a set of practices that combines development and operations to automate the software delivery process, enabling faster, reliable, and continuous releases."*

---

## 2. Why DevOps? — The Real Problems it Solves

### Problem 1: Deployment is Slow 🐢

```
❌ Without DevOps                  ✅ With DevOps

  Write code                         Push code to GitHub
      ↓                                     ↓
  Tell Ops team                       CI/CD pipeline runs
      ↓                                     ↓
  Wait 2–3 days                       Auto build + test
      ↓                                     ↓
  Manual deploy                      Auto deploy to AWS
      ↓                                     ↓
  Pray it works 😅                   Done in 5-10 min 🚀
```

### Problem 2: "Works on My Machine" 😤

```
Developer's Laptop        Staging Server          Production Server
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│  Node 18        │      │  Node 16        │      │  Node 14        │
│  npm 9          │  ≠   │  npm 8          │  ≠   │  npm 7          │
│  Ubuntu 22      │      │  Ubuntu 20      │      │  CentOS 7       │
│  "It works!" ✅ │      │  "Bugs! ❌"     │      │  "Crashed! ❌"  │
└─────────────────┘      └─────────────────┘      └─────────────────┘

    Solution: Docker → Same environment EVERYWHERE 📦
```

### Problem 3: Manual = Human Error

```
Manual deployment steps:
  Step 1: SSH into server    ← forget this? disaster
  Step 2: Pull new code      ← pull wrong branch? disaster
  Step 3: Install deps       ← skip this? disaster
  Step 4: Restart server     ← forget this? app still old version

Automated pipeline:
  One button → All steps run perfectly, every single time ✅
```

### Problem 4: Late Bug Detection

```
Traditional:
  Write code (week 1) ──────────────▶ Test (week 8) ──▶ Bug found 😱
                          (bug sits here for 7 weeks)

DevOps:
  Write code → commit → auto-test runs → Bug found in minutes ✅
```

### The Business Value

| Metric | Without DevOps | With DevOps |
|---|---|---|
| Deployment frequency | Monthly/Quarterly | Daily/Hourly |
| Lead time for changes | Weeks | Minutes |
| Mean time to recovery | Days | Hours |
| Change failure rate | High | Low |

---

## 3. Traditional vs DevOps

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TRADITIONAL vs DEVOPS                            │
├──────────────────┬──────────────────────┬───────────────────────────┤
│ Aspect           │ Traditional          │ DevOps                    │
├──────────────────┼──────────────────────┼───────────────────────────┤
│ Team Structure   │ Dev and Ops separate │ Dev + Ops collaborate     │
│ Deployment       │ Manual (SSH, FTP)    │ Automated (CI/CD)         │
│ Release Speed    │ Days / weeks         │ Minutes / hours           │
│ Bug Detection    │ Late (after release) │ Early (during CI)         │
│ Feedback Loop    │ Slow                 │ Continuous                │
│ Environment      │ Dev ≠ Prod (mismatch)│ Same via Docker           │
│ Responsibility   │ Blame game           │ Shared ownership          │
│ Infrastructure   │ Manual setup         │ Code-based (Terraform)    │
│ Monitoring       │ Reactive (post-crash)│ Proactive (real-time)     │
│ Scaling          │ Manual               │ Automatic                 │
└──────────────────┴──────────────────────┴───────────────────────────┘
```

> 🧠 **Key Mental Model:**
>
> - Traditional → *"Build first, fix later"*  
> - DevOps → *"Build → Test → Deploy → Monitor → Improve continuously"*

---

## 4. The DevOps Lifecycle

The DevOps lifecycle is an **infinite loop** — it never stops. New features keep getting built, deployed, monitored, and improved.

```
                    ┌──────────────────┐
               ┌───▶│   1. PLAN        │ ← gather requirements, design
               │    └────────┬─────────┘
               │             │
               │    ┌────────▼─────────┐
               │    │   2. CODE        │ ← write code, version control (Git)
               │    └────────┬─────────┘
               │             │
               │    ┌────────▼─────────┐
               │    │   3. BUILD       │ ← compile, bundle, package
               │    └────────┬─────────┘
               │             │
               │    ┌────────▼─────────┐
               │    │   4. TEST        │ ← unit, integration, e2e tests
               │    └────────┬─────────┘
               │             │
               │    ┌────────▼─────────┐
               │    │   5. RELEASE     │ ← tag, version, prepare artifact
               │    └────────┬─────────┘
               │             │
               │    ┌────────▼─────────┐
               │    │   6. DEPLOY      │ ← push to staging / production
               │    └────────┬─────────┘
               │             │
               │    ┌────────▼─────────┐
               │    │   7. OPERATE     │ ← server management, infra
               │    └────────┬─────────┘
               │             │
               │    ┌────────▼─────────┐
               └────│   8. MONITOR     │ ← logs, metrics, alerts, feedback
                    └──────────────────┘
```

### What happens in each phase?

| Phase | Team | Tools |
|---|---|---|
| Plan | Product + Dev | Jira, Notion, Trello |
| Code | Developers | VS Code, Git, GitHub |
| Build | CI System | npm, Maven, Gradle, Webpack |
| Test | QA + CI | Jest, Selenium, Cypress |
| Release | DevOps | GitHub Actions, Jenkins |
| Deploy | DevOps | AWS, Docker, Kubernetes |
| Operate | Ops | Terraform, Ansible |
| Monitor | Ops | Prometheus, Grafana, Datadog |

---

## 5. SDLC — Software Development Life Cycle

### What is SDLC?

> SDLC is the **step-by-step process** of planning, building, testing, and delivering software.

### SDLC Models

```
Waterfall (Traditional)           Agile + DevOps
─────────────────────────         ──────────────────────────────
Planning                          Sprint 1 ─┐
    │                             Plan       │  Loop repeats
Testing                           Code       │  every 2 weeks
    │                             Test       │
Development                       Deploy ────┘
    │                             Monitor
Deployment                        Sprint 2 ─┐ ... and so on
    │                                        │
Maintenance                                  └─ (continuous)


Problem: All phases are                Solution: Short cycles, fast
sequential → you find bugs LATE        feedback, deploy continuously
```

### DevOps context answer

> *"DevOps automates the SDLC and makes it continuous. Instead of releasing once every few months (Waterfall), teams release multiple times per day using CI/CD pipelines."*

---

## 6. CI/CD — The Heart of DevOps

### What is CI?

**CI = Continuous Integration**

> Every time a developer pushes code, it is automatically **built and tested**.

```
Developer                   CI Server
──────────                  ─────────────────────────────────────────
Write code
    │
git push ──────────────────▶ Code received
                             │
                             ├─ 1. Pull latest code
                             ├─ 2. Install dependencies
                             ├─ 3. Build the app
                             ├─ 4. Run unit tests
                             ├─ 5. Run integration tests
                             │
                             ▼
                        ✅ PASS → merge allowed
                        ❌ FAIL → developer notified, fix required
```

**Goal:** Catch bugs early, before they reach production.

### What is CD?

There are **two meanings** of CD:

```
CD = Continuous Delivery          CD = Continuous Deployment
─────────────────────────         ──────────────────────────────
Code is always in a               Code is automatically
deployable state.                 deployed to production
                                  without human approval.

Manual approval needed            Fully automatic
before final deploy.              end-to-end.

Safer for large teams.            Used by companies like
                                  Netflix, Amazon.
```

### Full CI/CD Pipeline

```
Developer pushes code to GitHub
          │
          ▼
┌──────────────────────────────────────────────────────────────────────┐
│                         CI/CD PIPELINE                               │
│                                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │  CODE   │─▶│  BUILD  │─▶│  TEST   │─▶│SECURITY │─▶│ DEPLOY  │  │
│  │         │  │         │  │         │  │  SCAN   │  │         │  │
│  │ lint    │  │ compile │  │ unit    │  │ vulns   │  │ staging │  │
│  │ format  │  │ bundle  │  │ integr. │  │ secrets │  │ prod    │  │
│  │ commit  │  │ package │  │ e2e     │  │         │  │         │  │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
└──────────────────────────────────────────────────────────────────────┘
          │                                                    │
          │                                                    ▼
       minutes                                    ✅ App live in production
```

### CI/CD Tools

| Tool | Type | Use Case |
|---|---|---|
| GitHub Actions | CI/CD | Popular, free for open source |
| Jenkins | CI/CD | Self-hosted, very customizable |
| GitLab CI | CI/CD | Built into GitLab |
| CircleCI | CI/CD | Cloud-based |
| ArgoCD | CD only | Kubernetes-native CD |

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Build Docker image
        run: docker build -t my-app .

      - name: Deploy to AWS
        run: # deployment commands
```

---

## 7. Build Concept

### What is a "Build"?

> **Build** = converting your raw source code into a runnable artifact (executable, bundle, container image, etc.)

```
Source Code               Build Process              Artifact
───────────               ─────────────              ────────

index.js                  npm install            →   node_modules/
package.json       ──▶    npm run build          →   dist/bundle.js
styles.css                webpack                →   app.min.css
images/                   babel transpile        →   app.js (ES5)

Java files         ──▶    javac compile          →   .class files
                          jar package            →   app.jar

Go files           ──▶    go build               →   ./app (binary)

Dockerfile         ──▶    docker build           →   Docker Image
```

### Why can't you just run raw source code in production?

```
Reasons why raw code ≠ runnable in production:
  1. Dependencies not installed (node_modules)
  2. TypeScript needs to be compiled to JavaScript
  3. Code needs to be minified/bundled for performance
  4. Environment-specific configs need to be injected
  5. Security: source code shouldn't be exposed on servers
```

### Artifact Repository

After building, you store the artifact somewhere so it can be deployed:

```
Build  →  Artifact  →  Stored in Registry  →  Deployed

Docker image → pushed to → Docker Hub / ECR → pulled by server
.jar file    → pushed to → Nexus / JFrog     → deployed to server
```

---

## 8. Containerization with Docker

### What Problem Does Docker Solve?

```
Without Docker:
  "It works on my machine!" 😤
  ─────────────────────────────
  Dev machine:  Node 18, Ubuntu
  Prod server:  Node 14, CentOS
  Result:       App crashes in production

With Docker:
  "It works everywhere." ✅
  ─────────────────────────────
  Docker packages app + ALL dependencies
  Container runs the same on any machine
  Dev = Staging = Production environment
```

### Virtual Machine vs Container

```
┌──────────────────────────────────────────────────────────────┐
│                    HOST OPERATING SYSTEM                      │
│                                                              │
│   ┌─────────────────────┐    ┌────────────────────────────┐  │
│   │   VIRTUAL MACHINE   │    │      DOCKER CONTAINERS     │  │
│   │                     │    │                            │  │
│   │  ┌───┐ ┌───┐ ┌───┐  │    │  ┌────┐ ┌────┐ ┌────┐    │  │
│   │  │App│ │App│ │App│  │    │  │App │ │App │ │App │    │  │
│   │  └───┘ └───┘ └───┘  │    │  └────┘ └────┘ └────┘    │  │
│   │  Guest Guest Guest  │    │                            │  │
│   │   OS    OS    OS    │    │   Docker Engine (shared)   │  │
│   │  (HEAVY: GBs each)  │    │   (LIGHT: MBs each)       │  │
│   └─────────────────────┘    └────────────────────────────┘  │
│                                                              │
│  VM boots full OS each time    Containers share host OS      │
│  Slow startup (minutes)        Fast startup (seconds)        │
│  Heavy (GBs of disk)           Lightweight (MBs)             │
└──────────────────────────────────────────────────────────────┘
```

| Feature | Virtual Machine | Docker Container |
|---|---|---|
| Startup time | Minutes | Seconds |
| Size | GBs | MBs |
| OS | Full Guest OS | Shares Host OS |
| Isolation | Strong | Good |
| Performance | Lower | Near-native |
| Portability | Limited | High |

### Docker Architecture

```
┌──────────────────────────────────────────────────────────┐
│                      HOST MACHINE                        │
│                                                          │
│   Docker CLI  ──────commands──────▶  Docker Daemon      │
│   (you type)                         (background        │
│                                       service)          │
│                                          │               │
│                               ┌──────────▼───────────┐  │
│                               │    DOCKER ENGINE      │  │
│                               │                       │  │
│                               │  ┌─────┐  ┌─────┐    │  │
│                               │  │ C1  │  │ C2  │    │  │
│                               │  └──┬──┘  └──┬──┘    │  │
│                               │     │         │       │  │
│                               │  ┌──▼─────────▼──┐   │  │
│                               │  │  Docker Images │   │  │
│                               └──┴───────────────┴───┘  │
│                                                          │
│   Docker Hub / Registry (remote image store)             │
└──────────────────────────────────────────────────────────┘
```

### Image vs Container

```
Docker Image                     Docker Container
────────────                     ────────────────
Blueprint / Template             Running instance of an image

Like a class in OOP              Like an object created from a class

Read-only                        Has a writable layer on top

Stored on disk                   Lives in memory (while running)

Built from Dockerfile            Created with: docker run <image>

Can create many containers       Each container is isolated
from one image
```

### Dockerfile Structure

```dockerfile
# 1. Base Image — what OS/runtime to start with
FROM node:20-alpine

# 2. Working directory inside container
WORKDIR /app

# 3. Copy dependency files first (for layer caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the source code
COPY . .

# 6. Expose port
EXPOSE 3000

# 7. Default command to run the app
CMD ["node", "index.js"]
```

### Why copy package.json BEFORE source code?

```
Docker Layer Caching Strategy:
──────────────────────────────

Layers:  FROM ─▶ WORKDIR ─▶ COPY package.json ─▶ RUN npm install ─▶ COPY . .

If you change source code → only last layer rebuilds   ✅ FAST
If you change package.json → npm install re-runs       (expected)

If you copied everything first:
COPY . . ─▶ RUN npm install

Every code change → npm install re-runs                ❌ SLOW
```

### Docker Networking

```
                        HOST MACHINE
                 ┌──────────────────────────┐
                 │                          │
                 │    Docker Bridge Network │
                 │  ┌───────────────────┐   │
  Internet ─────▶│  │   Node.js App     │   │
  (port 3000)    │  │   172.17.0.2      │   │
                 │  │        │          │   │
                 │  │   Redis           │   │
                 │  │   172.17.0.3      │   │
                 │  │        │          │   │
                 │  │   PostgreSQL      │   │
                 │  │   172.17.0.4      │   │
                 │  └───────────────────┘   │
                 │  (hidden from internet)  │
                 └──────────────────────────┘

Only Node.js is exposed publicly.
Redis and PostgreSQL are private — safer! 🔐
```

---

## 9. Container Orchestration with Kubernetes

### Why Kubernetes?

```
Problem Docker alone doesn't solve:
  - What if a container crashes? → restart it automatically
  - What if traffic spikes? → spin up more containers
  - What if a server dies? → move containers to another server
  - How to update 100 containers with zero downtime?

Solution: Kubernetes (K8s) — manages ALL of this automatically
```

### Kubernetes Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    KUBERNETES CLUSTER                         │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                  CONTROL PLANE                       │    │
│  │                                                      │    │
│  │   API Server  ←─── kubectl (your commands)          │    │
│  │       │                                              │    │
│  │  Scheduler  Controller  etcd (state storage)        │    │
│  └──────────────────────────────────────────────────────┘    │
│                         │                                    │
│           ┌─────────────┼──────────────┐                    │
│           ▼             ▼              ▼                    │
│     ┌──────────┐  ┌──────────┐  ┌──────────┐               │
│     │  Node 1  │  │  Node 2  │  │  Node 3  │               │
│     │          │  │          │  │          │               │
│     │ ┌──────┐ │  │ ┌──────┐ │  │ ┌──────┐ │               │
│     │ │ Pod  │ │  │ │ Pod  │ │  │ │ Pod  │ │               │
│     │ │(app) │ │  │ │(app) │ │  │ │(app) │ │               │
│     │ └──────┘ │  │ └──────┘ │  │ └──────┘ │               │
│     │ ┌──────┐ │  │          │  │ ┌──────┐ │               │
│     │ │ Pod  │ │  │          │  │ │ Pod  │ │               │
│     │ │(db)  │ │  │          │  │ │(redis│ │               │
│     │ └──────┘ │  │          │  │ └──────┘ │               │
│     └──────────┘  └──────────┘  └──────────┘               │
└──────────────────────────────────────────────────────────────┘
```

### Key Kubernetes Concepts

| Concept | What it is | Analogy |
|---|---|---|
| **Pod** | Smallest unit, wraps 1+ containers | One apartment |
| **Node** | A server running pods | An apartment building |
| **Cluster** | Group of nodes | A city of buildings |
| **Deployment** | Manages pods, handles updates & rollbacks | Building manager |
| **Service** | Exposes pods to network/internet | Building address |
| **Namespace** | Virtual cluster within a cluster | Different city zones |
| **ConfigMap** | Store config/env variables | Settings file |
| **Secret** | Store sensitive data (passwords) | Encrypted safe |

### Kubernetes Auto-healing Example

```
Normal state:
  Pod 1 ✅   Pod 2 ✅   Pod 3 ✅

Pod 2 crashes:
  Pod 1 ✅   Pod 2 ❌   Pod 3 ✅

Kubernetes detects → auto-restarts Pod 2:
  Pod 1 ✅   Pod 2 ✅   Pod 3 ✅   (new Pod 2)

You don't do anything — Kubernetes handles it 🤖
```

---

## 10. Cloud Fundamentals (AWS)

### Why Cloud?

```
Traditional (On-Premise):                Cloud (AWS):
─────────────────────────                ────────────
Buy physical servers                     Rent virtual servers
Pay upfront (expensive)                  Pay per use (cheap to start)
Takes weeks to set up                    Ready in minutes
Fixed capacity                           Scale up/down instantly
You manage hardware                      AWS manages hardware
```

### Core AWS Services

```
┌─────────────────────────────────────────────────────────────────┐
│                         AWS SERVICES MAP                         │
│                                                                  │
│  COMPUTE              STORAGE             NETWORKING             │
│  ─────────            ─────────           ─────────────          │
│  EC2                  S3                  VPC                    │
│  (virtual servers)    (file storage)      (private network)      │
│                                                                  │
│  Lambda               EBS                Route 53               │
│  (serverless)         (disk for EC2)      (DNS)                  │
│                                                                  │
│  ECS/EKS              RDS                CloudFront             │
│  (containers)         (managed DB)        (CDN)                  │
│                                                                  │
│  SECURITY             MONITORING          IDENTITY               │
│  ─────────            ─────────           ─────────              │
│  Security Groups      CloudWatch          IAM                    │
│  (firewall rules)     (logs/metrics)      (users & permissions)  │
└─────────────────────────────────────────────────────────────────┘
```

### EC2 — Elastic Compute Cloud

```
EC2 = Virtual server in the cloud

You choose:
  ├── Instance type (CPU + RAM): t2.micro, t3.medium, c5.large
  ├── Operating system: Ubuntu, Amazon Linux, Windows
  ├── Storage: SSD / HDD
  └── Network: Which VPC, subnet, security group

Common Use:
  Deploy web server, run databases, run Docker containers
```

### S3 — Simple Storage Service

```
S3 = Infinitely scalable file storage

Stores: images, videos, backups, logs, static websites
Access: via URL or AWS SDK
Organized as: Buckets → Objects (files)

Example:
  Bucket:  my-company-assets
  Object:  /images/logo.png  →  https://my-company-assets.s3.amazonaws.com/images/logo.png
```

### IAM — Identity and Access Management

```
IAM controls WHO can do WHAT in your AWS account.

Entities:
  User  → a person (has username/password)
  Group → collection of users
  Role  → assumed by services (like EC2, Lambda)

Policy → JSON document that defines permissions

Example Policy:
{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::my-bucket/*"
}
→ Allows reading files from my-bucket only

Golden Rule: Principle of Least Privilege
  Give only the permissions that are absolutely needed, nothing more.
```

### VPC — Virtual Private Cloud

```
VPC = Your own private network inside AWS

                    INTERNET
                        │
               ┌────────▼────────┐
               │  Internet       │
               │  Gateway (IGW)  │
               └────────┬────────┘
                        │
          ┌─────────────▼──────────────┐
          │           VPC              │
          │   (your private network)   │
          │                            │
          │  ┌──────────────────────┐  │
          │  │  Public Subnet       │  │
          │  │  Web Server (EC2)    │  │  ← accessible from internet
          │  └──────────┬───────────┘  │
          │             │              │
          │  ┌──────────▼───────────┐  │
          │  │  Private Subnet      │  │
          │  │  Database (RDS)      │  │  ← NOT accessible from internet
          │  └──────────────────────┘  │
          └────────────────────────────┘
```

---

## 11. Infrastructure as Code (Terraform)

### What is IaC?

> **Infrastructure as Code** = managing and provisioning infrastructure using **code** (configuration files) instead of manually clicking through dashboards.

```
Traditional (Manual):              IaC (Terraform):
─────────────────────              ────────────────
Log into AWS console               Write a .tf file:
Click "Create EC2"
Choose instance type               resource "aws_instance" "web" {
Select AMI                           ami           = "ami-12345678"
Configure network                    instance_type = "t2.micro"
Click "Launch"                     }

→ Repeat for every server          terraform apply → done ✅
→ Error-prone
→ Not reproducible                 → Repeatable
                                   → Version-controlled
                                   → Self-documenting
```

### Terraform Workflow

```
Write .tf files
      │
      ▼
terraform init      ← download provider plugins
      │
      ▼
terraform plan      ← preview what will be created/changed/destroyed
      │
      ▼
terraform apply     ← actually create the infrastructure
      │
      ▼
terraform destroy   ← tear everything down
```

### Key Terraform Concepts

| Concept | What it is |
|---|---|
| **Provider** | Plugin for a cloud (AWS, GCP, Azure) |
| **Resource** | An infrastructure piece (EC2, S3, VPC) |
| **State file** | Tracks what Terraform has created (terraform.tfstate) |
| **Module** | Reusable group of resources |
| **Variable** | Parameterize your config |
| **Output** | Print useful values after apply (like IP addresses) |

### Why State File Matters

```
terraform.tfstate = the memory of Terraform

It records:
  - What resources were created
  - Their IDs, IPs, config
  - So Terraform knows what to update vs create vs destroy

⚠️  Warning: Never delete the state file!
    ─────────────────────────────────────────────────────
    If you delete it → Terraform thinks nothing exists
    → It will try to recreate everything
    → You'll have duplicate resources and chaos
```

### Idempotency

> Running the same Terraform config **multiple times** always results in the **same infrastructure state** — it won't create duplicates.

```
Run 1: terraform apply → creates EC2
Run 2: terraform apply → sees EC2 already exists → does nothing ✅
Run 3: terraform apply → still does nothing ✅
```

---

## 12. Linux Fundamentals

### File System

```
/                    ← root of entire filesystem
├── home/            ← user home directories
│   └── ubuntu/      ← your files go here
├── etc/             ← config files
├── var/             ← logs, variable data
│   └── log/
├── usr/             ← user programs (like /usr/bin/node)
├── tmp/             ← temporary files
└── opt/             ← optional installed software
```

### Essential Commands

```bash
# Navigation
pwd                  # print working directory
ls                   # list files
ls -la               # detailed list including hidden files
cd /path/to/dir      # change directory
cd ..                # go up one level
cd ~                 # go to home directory

# Files & Directories
mkdir my-folder      # create directory
touch file.txt       # create empty file
cp src dest          # copy file
mv src dest          # move / rename file
rm file.txt          # delete file
rm -rf folder/       # delete folder (careful!)
cat file.txt         # print file contents
less file.txt        # scroll through file
nano file.txt        # edit file (simple editor)

# Permissions
ls -l                # see permissions: -rwxr-xr-x
chmod 755 file       # change permissions
chmod +x script.sh   # make executable
chown user:group f   # change ownership

# Process Management
ps aux               # list all running processes
top                  # live process monitor
htop                 # better process monitor
kill 1234            # kill process by PID
kill -9 1234         # force kill
pkill nginx          # kill by name

# Networking
curl https://example.com    # make HTTP request
wget https://file.zip       # download file
netstat -tuln               # list open ports
ss -tuln                    # modern alternative to netstat
ping google.com             # test connectivity

# Search & Filter
grep "error" log.txt        # search for text in file
grep -r "todo" ./src        # search recursively
find / -name "*.log"        # find files by name
cat log.txt | grep "ERROR"  # pipe: filter output

# System Info
uname -a             # kernel info
df -h                # disk usage
free -h              # memory usage
uptime               # how long system has been running

# Package Management (Ubuntu/Debian)
apt update           # refresh package list
apt install nginx    # install package
apt remove nginx     # uninstall package
apt upgrade          # upgrade all packages
```

### File Permissions Explained

```
-rwxr-xr-x  1  root  root  1234  Jan 1  file.sh
│├───┤├──┤├──┤
││   │  │  └─ other permissions (r-x = read + execute)
││   │  └──── group permissions (r-x = read + execute)
││   └──────── owner permissions (rwx = read + write + execute)
│└──────────── file type (- = file, d = directory, l = link)
│
Permission values:
  r = 4 (read)
  w = 2 (write)
  x = 1 (execute)

chmod 755 = owner(7=rwx) group(5=r-x) other(5=r-x)
chmod 644 = owner(6=rw-) group(4=r--) other(4=r--)
```

### Shell Scripting Basics

```bash
#!/bin/bash
# Above line = shebang, tells OS to use bash

# Variables
NAME="DevOps"
echo "Hello, $NAME"

# If/Else
if [ $1 -eq 0 ]; then
  echo "No arguments"
else
  echo "Argument: $1"
fi

# Loop
for i in 1 2 3; do
  echo "Number: $i"
done

# Run a script:
chmod +x script.sh   # make it executable
./script.sh          # run it
```

---

## 13. Git & Version Control

### Why Git?

```
Without Git:                         With Git:
────────────                         ────────
project-v1.zip                       git log → full history
project-v2-final.zip                 git checkout → go back in time
project-v2-FINAL-REAL.zip            git branch → work in isolation
project-SUBMIT-THIS.zip              git merge → combine work
                                     GitHub → collaboration
```

### Core Git Workflow

```
Working Directory      Staging Area          Local Repo         Remote Repo
─────────────────      ────────────          ──────────         ───────────
  (edit files)

  edit file.js
       │
  git add file.js ──▶  file staged
                              │
                        git commit ─────▶  commit saved
                                                 │
                                           git push ─────▶  GitHub/GitLab
                                                                   │
                                           git pull ◀─────  others' changes
```

### Essential Git Commands

```bash
# Setup
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Start
git init                    # new repo
git clone <url>             # copy remote repo

# Daily workflow
git status                  # what's changed?
git add file.js             # stage a file
git add .                   # stage everything
git commit -m "message"     # save snapshot
git push origin main        # push to GitHub
git pull origin main        # get latest changes

# Branches
git branch                  # list branches
git branch feature-login    # create branch
git checkout feature-login  # switch to branch
git checkout -b feature-x   # create + switch
git merge feature-login     # merge into current branch
git branch -d feature-login # delete branch

# History
git log                     # commit history
git log --oneline           # compact history
git diff                    # see unstaged changes
git show <commit-hash>      # inspect a commit

# Undo
git restore file.js         # discard unstaged changes
git reset HEAD~1            # undo last commit (keep changes)
git reset --hard HEAD~1     # undo last commit (discard changes)
git revert <hash>           # safe undo (creates new commit)
```

### Git Branching Strategy

```
main ──●──────────────────────────────────●── release
       │                                  │
       └── develop ──●──●──●──────────────┤
                     │        │           │
                     └──feature/login     │
                              │           │
                              └──────────▶┘ (PR/merge)
```

### Merge vs Rebase

```
Merge:                                 Rebase:
──────                                 ────────
        A─B─C  (feature)                      A'─B'─C'  (feature, replayed)
       /       \                             /
──1──2──────────M──  (main)          ──1──2──3──A'─B'─C'
                  (merge commit)
                                     Cleaner history, but rewrites commits
Preserves full history               ⚠️ Never rebase public/shared branches
Good for shared branches
```

---

## 14. Networking Basics

### How the Internet Works (DNS lookup)

```
You type: https://google.com

1. Browser checks local DNS cache → not found
2. Asks DNS resolver (your ISP or 8.8.8.8)
3. DNS resolver asks root nameserver
4. Gets directed to .com nameserver
5. Gets Google's nameserver
6. Gets Google's IP: 142.250.180.46
7. Browser connects to 142.250.180.46 on port 443 (HTTPS)
8. TLS handshake (encrypt the connection)
9. HTTP GET request sent
10. Google's server responds with HTML
11. Browser renders the page

Total time: ~50–200ms 🚀
```

### Key Concepts

| Concept | Explanation |
|---|---|
| **IP Address** | Unique address of a machine on a network (e.g., 192.168.1.1) |
| **Port** | Specific channel on a machine (80=HTTP, 443=HTTPS, 22=SSH, 3306=MySQL) |
| **DNS** | Translates domain names to IP addresses (like a phonebook) |
| **HTTP** | Protocol for web communication (port 80) |
| **HTTPS** | Encrypted HTTP via TLS (port 443) |
| **SSH** | Secure shell — remote login to servers (port 22) |
| **TCP** | Reliable protocol (guaranteed delivery) — used by HTTP |
| **UDP** | Fast, unreliable protocol — used by video calls, gaming |
| **Firewall** | Rules that allow/deny traffic based on IP/port |
| **Load Balancer** | Distributes traffic across multiple servers |
| **CDN** | Servers globally distributed to serve content faster |

### Common Ports to Know

```
Port 22   → SSH  (remote terminal)
Port 80   → HTTP  (web, unencrypted)
Port 443  → HTTPS (web, encrypted)
Port 3306 → MySQL
Port 5432 → PostgreSQL
Port 6379 → Redis
Port 27017 → MongoDB
Port 3000  → Node.js (default dev)
Port 8080  → Alternative HTTP
```

---

## 15. Monitoring & Logging

### Why Monitor?

```
Without Monitoring:                    With Monitoring:
───────────────────                    ────────────────
User reports app is down ← you find out    Alert fires → team notified
Usually means 30+ min of downtime          Investigate dashboard
You have no clue why                       See spike in CPU at 2:03 AM
You're debugging blind                     Trace back to a bad deployment
                                           Rollback and fix in minutes
```

### The Three Pillars of Observability

```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│     METRICS    │  │     LOGS       │  │    TRACES      │
│                │  │                │  │                │
│ Numbers over   │  │ Text records   │  │ End-to-end     │
│ time           │  │ of events      │  │ request path   │
│                │  │                │  │                │
│ CPU: 85%       │  │ ERROR: DB      │  │ Request A →    │
│ Memory: 4GB    │  │ connection     │  │ Service B →    │
│ Requests: 500/s│  │ failed at      │  │ DB query →     │
│                │  │ 2025-01-01     │  │ 210ms total    │
│ Tool:          │  │ 03:21:45       │  │                │
│ Prometheus     │  │ Tool: ELK,     │  │ Tool: Jaeger,  │
│                │  │ Loki           │  │ Zipkin         │
└────────────────┘  └────────────────┘  └────────────────┘
        │                   │                   │
        └────────────────────┴───────────────────┘
                             │
                       Grafana (visualize all three)
```

### Prometheus + Grafana Setup

```
App (Node.js) ─── exposes /metrics ──▶ Prometheus (collects) ──▶ Grafana (displays)

Grafana shows:
  - Request rate graphs
  - Error rate graphs
  - CPU / Memory usage
  - Custom business metrics
  - Alerting thresholds
```

### Important Metrics to Track

```
Infrastructure Metrics:
  CPU usage          → should stay below 70-80%
  Memory usage       → watch for memory leaks
  Disk I/O           → database performance
  Network bandwidth  → traffic spikes

Application Metrics:
  Request rate (RPS) → how many requests per second
  Error rate         → % of 5xx responses
  Latency (p99)      → 99th percentile response time
  Apdex score        → user satisfaction metric

Business Metrics:
  Active users
  Conversion rate
  Revenue per hour
```

---

## 16. DevSecOps — Security in DevOps

### What is DevSecOps?

> **DevSecOps** = DevOps + Security built in from the start, not bolted on at the end.

```
Old way:    Dev → Dev → Dev → Ops → Security check ← (too late)
DevSecOps:  Dev → Security check → Dev → Security check → Ops
                  (at every step of the pipeline)
```

### Security in CI/CD Pipeline

```
Code push → SAST (static code analysis) → Dependency scan → 
Container scan → Deploy → DAST (dynamic testing) → Monitor
```

### Key Security Concepts

| Concept | What it is | Tool |
|---|---|---|
| **SAST** | Scan source code for vulnerabilities without running it | SonarQube, Semgrep |
| **DAST** | Test running app for vulnerabilities (like hacking yourself) | OWASP ZAP |
| **Dependency Scan** | Check npm/pip packages for known CVEs | Snyk, Dependabot |
| **Container Scan** | Scan Docker images for OS vulnerabilities | Trivy, Snyk |
| **Secrets Management** | Store passwords/keys securely, never hardcode | AWS Secrets Manager, Vault |
| **Least Privilege** | Give minimum permissions needed | IAM policies |

### Secrets Management — Never Do This

```bash
# ❌ NEVER hardcode secrets
const DB_PASSWORD = "myPassword123"
const API_KEY = "sk-abc123..."

# ❌ NEVER commit .env to Git
git add .env   # DISASTER — exposed to everyone with repo access

# ✅ DO THIS INSTEAD
const DB_PASSWORD = process.env.DB_PASSWORD  # from environment variable

# Store secrets in:
# - AWS Secrets Manager
# - HashiCorp Vault
# - GitHub Actions Secrets
# - Kubernetes Secrets
```

---

## 17. Configuration Management (Ansible)

### What is Ansible?

> **Ansible** = a tool to automatically configure and manage servers at scale.

```
Without Ansible:
  SSH into server 1 → run commands manually
  SSH into server 2 → run commands manually
  SSH into server 3 → run commands manually
  SSH into server 50 → 😭

With Ansible:
  Write a playbook once
  ansible-playbook setup.yml → configures all 50 servers simultaneously ✅
```

### Ansible Concepts

```
Inventory         → list of servers to manage
  [webservers]
  192.168.1.1
  192.168.1.2

  [databases]
  192.168.1.10

Playbook          → YAML file with tasks to run
Module            → built-in action (install package, copy file, etc.)
Role              → reusable group of tasks

Example Playbook:
─────────────────
- hosts: webservers
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Start nginx
      service:
        name: nginx
        state: started
```

### Ansible vs Terraform

| | Ansible | Terraform |
|---|---|---|
| **Purpose** | Configure existing servers | Provision new infrastructure |
| **Type** | Configuration management | Infrastructure as Code |
| **Language** | YAML | HCL |
| **State** | Stateless | Stateful (state file) |
| **Use for** | Install software, manage files | Create EC2, VPC, S3 |

> In practice: Use **Terraform to create the server**, then **Ansible to configure it**.

---

## 18. Questions

### DevOps Fundamentals

**Q: What is DevOps?**
> DevOps is a set of practices and culture that combines software development and IT operations to shorten the development lifecycle and deliver software continuously and reliably.

**Q: What is the difference between CI and CD?**
> CI (Continuous Integration) is the practice of automatically building and testing code every time it's pushed. CD (Continuous Delivery) is automatically preparing code for release, while Continuous Deployment automatically deploys it to production.

**Q: What is the difference between Docker and a VM?**
> VMs run a full guest OS for each instance, making them heavy (GBs) and slow to start. Docker containers share the host OS kernel, making them lightweight (MBs) and fast to start (seconds). Docker provides better performance and density.

**Q: What is a Dockerfile?**
> A Dockerfile is a text file containing step-by-step instructions to build a Docker image. Each instruction creates a layer. Docker caches layers to speed up subsequent builds.

**Q: What is Kubernetes?**
> Kubernetes is a container orchestration platform that automates deployment, scaling, and management of containerized applications. It handles auto-healing, auto-scaling, load balancing, and rolling updates.

**Q: What is IaC and why is it important?**
> Infrastructure as Code is the practice of managing infrastructure through code files instead of manual processes. It enables reproducibility, version control, automation, and collaboration on infrastructure.

**Q: What is the Terraform state file?**
> The state file (terraform.tfstate) is how Terraform tracks what infrastructure it has created. It maps your config to real-world resources. Losing it can cause Terraform to lose track of existing resources. It should be stored remotely (like S3) in team environments.

**Q: What is the Principle of Least Privilege?**
> Give users, services, and processes only the minimum permissions they need to do their job — nothing more. This limits the blast radius if credentials are compromised.

**Q: What is the difference between monitoring and logging?**
> Logging records discrete events as text (what happened and when). Monitoring tracks numerical metrics over time (CPU %, error rate). Together they form the observability foundation.

**Q: What is a CI/CD pipeline?**
> A CI/CD pipeline is an automated sequence of steps triggered by a code change: typically code → build → test → security scan → deploy. It ensures code is tested and deployed consistently without manual intervention.

---

### Quick Reference — DevOps Toolchain

```
┌───────────────────────────────────────────────────────────────────────┐
│                     DEVOPS TOOLCHAIN OVERVIEW                          │
├─────────────────────┬─────────────────────────────────────────────────┤
│ Category            │ Tools                                           │
├─────────────────────┼─────────────────────────────────────────────────┤
│ Source Control      │ Git, GitHub, GitLab, Bitbucket                  │
│ CI/CD               │ GitHub Actions, Jenkins, CircleCI, GitLab CI    │
│ Containerization    │ Docker, Podman                                  │
│ Orchestration       │ Kubernetes, Docker Swarm                        │
│ Cloud               │ AWS, GCP, Azure                                 │
│ IaC                 │ Terraform, Pulumi, CloudFormation               │
│ Config Management   │ Ansible, Chef, Puppet                           │
│ Monitoring          │ Prometheus, Datadog, New Relic                  │
│ Logging             │ ELK Stack, Loki, Splunk                         │
│ Visualization       │ Grafana, Kibana                                 │
│ Artifact Registry   │ Docker Hub, ECR, Nexus, JFrog                   │
│ Security            │ Snyk, Trivy, SonarQube, Vault                   │
│ Communication       │ Slack, PagerDuty (alerts)                       │
└─────────────────────┴─────────────────────────────────────────────────┘
```
