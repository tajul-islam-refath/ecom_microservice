# Node.js Microservice with Docker and Prisma

This project is a Node.js microservice built with **Prisma ORM** for database management, packaged and run using **Docker**.

## Features

- **Node.js** for the backend runtime.
- **Express.js** for API routes.
- **Prisma** for database schema and management.
- **Docker** for containerization and consistent deployment.
- **Environment Variables** for secure configuration.
- **Modular Architecture** for scalability in microservices.

---

## Prerequisites

Before running this project, ensure you have the following installed:

1. **Node.js** (v20)
2. **Docker**
3. **Docker Compose**
4. **Prisma CLI**

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tajul-islam-refath/ecom_microservice.git
cd ecom_microservice
```

# Each service Configuration

```bash
PORT=3000
SERVICE_NAME=example
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

# Run with Docker

```bash
docker-compose up --d
```

# Stop with Docker

```bash
docker-compose down
```
