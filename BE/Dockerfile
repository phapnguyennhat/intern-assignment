# Stage 1: Build with devDependencies
FROM node:20 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci 

COPY . .
RUN npm run build


# Stage 2: Clean production image
FROM node:20 AS prod
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /usr/src/app/dist ./dist
EXPOSE ${PORT}

CMD ["node", "dist/src/main"]


#production
#docker build -t nestjs-app .
#docker run -p 8080:8080 nestjs-app

#development
#docker run -p 8080:8080 nestjs-app
