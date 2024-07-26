# PRISMA-NODE JS

## Table of Contents

- [PRISMA-NODE JS](#prisma-node-js)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployment](#deployment)
    - [Deployment to AWS EC2](#deployment-to-aws-ec2)

## About

Provide a brief description of the project here.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/EIOR-WEB-FE.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd EIOR-WEB-FE
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

After installing the dependencies, you can run the project locally with:

```sh
npm start
```

## Deployment

### Deployment to AWS EC2

1. **Checkout the latest changes (if there's a new merge request)**:
   ```sh
   cd eior
   cd EIOR-WEB-FE
   git fetch
   git checkout develop
   ```
2. **Docker Setup for the Database (PostgreSQL)**:
   Add a file named `docker-compose.db.yml` with the following content:

   ```yaml
   version: "3.8"

   services:
     db:
       image: postgres:latest
       container_name: prisma
       environment:
         POSTGRES_USER: prisma
         POSTGRES_PASSWORD: prisma
         POSTGRES_DB: prisma
       ports:
         - "5436:5432"
       volumes:
         - prisma_data:/var/lib/postgresql/data

   volumes:
     prisma_data:
   ```

3. **Build and Start Docker Containers**:
   ```sh
   docker-compose -f docker-compose.yml up -d --build
   ```
4. **Start Docker Containers (If there are no changes)**:
   ```sh
   docker-compose up -d
   ```
5. **Check if Docker Containers are Running**:
   ```sh
   docker ps
   docker logs [docker-id]
   ```
