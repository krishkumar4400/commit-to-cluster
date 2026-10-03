# Docker Microservices

## Project — E-Commerce Microservices

### Architecture

```Plain text
                    Nginx
                      |
                      ↓
                API Gateway
                      |
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
   User Service   Product Service  Order Service
       |              |              |
       ↓              ↓              ↓
   PostgreSQL      PostgreSQL      PostgreSQL
                                      |
                                      ↓
                                   RabbitMQ
                                      |
                     ┌────────────────┼─────────────┐
                     ↓                ↓             ↓
                Payment Service  Inventory     Notification
```

- Dockerize everything.
- Use Compose first.
