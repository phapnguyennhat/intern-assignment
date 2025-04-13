# Stage 1: Build with devDependencies
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci 

COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine AS prod

WORKDIR /usr/src/app

# Copy package.json and node_modules from builder
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy only built app
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["node", "dist/src/main"]
