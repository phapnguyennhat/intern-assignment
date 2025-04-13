# G-Scores

TechStack: NestJs, NextJs, Postgres, Redis


## Table of Contents
- [Link Demo](#link-demo)
- [Project Structure](#project-structure)
- [Precondition](#precondition)
- [Running the Application](#running-the-application)
- [Contributor](#contributor)
- [Contact](#contact)
---

## [Link Demo](https://intern-assignment-cyan.vercel.app)
    

## Project Structure
    intern-assignment/
    ├── BE/
    │   ├── Dockerfile
    │   ├──src/
    │   └──└── seeder.ts
    ├── FE/
    │   ├── Dockerfile
    ├── docker-compose.yml
    └── docker.env

## Precondition

- Node.js >= 18.x (I use version 21.6.2)
- npm 
- Docker 

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
npm install
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

⚠️ Notice: 
- If you open the frontend app and don’t see any data, it’s possible that Next.js or Redis cached empty data before the dataset was saved to the database. To resolve this issue, you should clear all cache in Redis and then restart the container.
- If you encounter any issues while running the application, don’t hesitate to contact me.


# Contributor
- Nguyen Nhat Phap (HCMUT-VNU)

# Contact 
- ✉️ nguyennhatphapbp@gmail.com



