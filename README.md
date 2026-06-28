# commit-to-cluster

> from `git push` to a cluster that pages someone at 3am when it breaks — and doesn't, because you built it right

---

## Why "commit to cluster"

Most people learn Docker, get a container running locally, and call it DevOps. The actual job starts after that — getting from a developer's commit to a production cluster automatically, safely, and observably, without someone manually SSH-ing into a box at 11pm. That gap is what this repo is built around.

## Status right now

**Current phase:** Phase 0 — Foundations
**Last updated:** *(edit this manually whenever you touch the repo)*

---

## Roadmap

### Phase 0 — Foundations

- [ ] Linux fundamentals — CLI, permissions, processes, systemd
- [ ] Networking basics — DNS, HTTP/HTTPS, TCP/IP, how a request actually travels
- [ ] Git workflows — branching strategies, rebasing, resolving real conflicts
- [ ] Bash scripting — automating the boring stuff

### Phase 1 — Containers

- [ ] Docker fundamentals — images, layers, why image size matters
- [ ] Writing efficient Dockerfiles — multi-stage builds, caching
- [ ] Docker Compose — multi-container local environments
- [ ] Container networking & volumes — what actually persists and why

### Phase 2 — CI/CD

- [ ] GitHub Actions — build, test, deploy pipelines
- [ ] Artifact management — versioned builds, not just "latest"
- [ ] Automated testing in pipelines — failing fast on purpose
- [ ] Deployment strategies — blue-green, canary, rollback

### Phase 3 — Infrastructure as Code

- [ ] Terraform — provisioning infra without clicking through a console
- [ ] Ansible — configuration management at scale
- [ ] Cloud basics — AWS/GCP core services, IAM, networking
- [ ] Environment parity — dev/staging/prod actually behaving the same

### Phase 4 — Orchestration

- [ ] Kubernetes fundamentals — pods, deployments, services, ingress
- [ ] Helm — packaging and templating k8s manifests
- [ ] Secrets management — not hardcoding credentials, ever
- [ ] Service mesh basics — traffic management, mTLS

### Phase 5 — Observability & Reliability

- [ ] Monitoring — Prometheus & Grafana
- [ ] Centralized logging — Loki / ELK
- [ ] Alerting that doesn't cry wolf
- [ ] SRE basics — SLIs/SLOs, incident response, postmortems

### Phase 6 — Scale & Advanced Systems

- [ ] GitOps — ArgoCD / Flux, declarative deployments
- [ ] Multi-cluster / multi-region patterns
- [ ] DevSecOps — security scanning in the pipeline, hardened images
- [ ] Cost optimization, disaster recovery

### Phase 7 — Capstone Projects

End-to-end pipelines pulling all of the above together. Tracked below.

---

## Progress tracker

| Phase | Status | Notes |
|---|---|---|
| 0 — Foundations | 🟡 In progress | |
| 1 — Containers | ⬜ Not started | |
| 2 — CI/CD | ⬜ Not started | |
| 3 — Infrastructure as Code | ⬜ Not started | |
| 4 — Orchestration | ⬜ Not started | |
| 5 — Observability & Reliability | ⬜ Not started | |
| 6 — Scale & Advanced Systems | ⬜ Not started | |
| 7 — Capstone Projects | ⬜ Not started | |

*(⬜ not started · 🟡 in progress · ✅ done · 🔴 paused / blocked)*

## Projects

| Project | Stack | Status | Live / Demo | Repo |
|---|---|---|---|---|
| — | — | — | — | — |

*(add a row every time a pipeline or cluster setup actually goes live)*

## Repo structure

```
commit-to-cluster/
├── 00-foundations/
├── 01-containers/
├── 02-ci-cd/
├── 03-infra-as-code/
├── 04-orchestration/
├── 05-observability-reliability/
├── 06-scale-systems/
├── 07-capstone-projects/
└── README.md
```

Each folder holds configs, scripts, and notes from that phase — real pipeline files and manifests, not just write-ups.

## Build log

Newest entries on top. Keeps this README a two-minute update, not a rewrite.

- **[add date]** — Repo created, roadmap mapped out.

## Stack I'm working with

![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat&logo=grafana&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white)

## Part of a series

- [`scratch-to-scale`](#) — full-stack web dev, fundamentals to production
- [`weights-to-prod`](#) — AI/ML and MLOps, fundamentals to production
- `commit-to-cluster` — this one

## Find me

- GitHub: [add link]
- LinkedIn: [add link]
- Portfolio: [add link]

---

*This README gets edited constantly. The checkboxes, build log, and project table are the parts that should never go stale.*
