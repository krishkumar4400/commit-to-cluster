# StockWise: Smart Restaurant Stock Alert System

## Overview

- A full-stack web app where restaurants can:
- Track inventory (ingredients, supplies, etc.)
- Get real-time alerts when stock is low
- Automatically trigger purchase orders or supplier notifications
- Monitor usage trends with dashboards

## Tech Stack

Forntend:

- React
- Tailwind CSS

Backend:

- Express

Database:

- MongoDB

Caching

- Redis

DevOps & Infrastructure:

- Docker + Docker Compose for containerization
- CI/CD pipeline with GitHub Actions
- Kubernetes (EKS) for orchestration
- Nginx/Traefik as reverse proxy
- AWS deployment with Terraform for IaC

## Features

1. Inventory Management

- Add/update/delete stock items
- Track consumption rates

1. Alert System

- Threshold-based alerts (e.g., “Tomatoes < 5kg”)
- Email/SMS/Slack notifications

3. Supplier Integration

- Auto-generate purchase orders
- API integration with supplier systems

4. Analytics Dashboard

- Usage trends
- Forecast demand
- Cost optimization insights

