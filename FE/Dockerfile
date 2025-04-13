FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ARG BACKEND_URL
RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Copy node_modules và package.json từ builder sang runner
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy các folder cần thiết cho runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm", "run", "start"]
