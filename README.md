# G-Scores

TechStack: NestJs, NextJs, Postgres, Redis


## Table of Contents

- [Project Structure](#project-structure)
- [Precondition](#precondition)
- [Running the Application](#running-the-application)

---

## Project Structure
    web dev-intern-assignment-3/
    ├── BE/
    │   ├── Dockerfile
    ├── FE/
    │   ├── Dockerfile
    ├── docker-compose.yml
    └── docker.env

## Precondition

- Node.js >= 18.x (I use version 21.6.2)
- npm or yarn
- Docker (optional)

## Running the Application

### Step 1: Clone the Repository

```bash
git clone https://github.com/phapnguyennhat/intern-assignment.git
cd intern-assignment
```


### Step 2: Run containers (FE,BE, PostgreSQL, Redis)
```bash
    docker compose up -d
```
### Step 3: Run migration
```bash
    cd BE
    npm run migration:generate -- db/migrations/create_table_examResult
    # you can rename migration if you want. 
    # Follow format db/migrations/${name_migrations}
    npm run migration:run
```
### Step 4: Save dataset into database
```bash
    npm run seed
    # it take about 15-20 minutes
```
###  Step 5: Open service
``` bash
    http://localhost:3000 (Front-End)
    http://localhost:8080 (Back-End)
    http://localhost:8081 (Redis-Commander)
    postgresql://root:root@localhost/intern-assignment (PostgreSQL)
    redis://redis:6379 (Redis)
```

# Contributor
- Nguyen Nhat Phap (HCMUT-VNU)



