FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production



ENV BACKEND_URL=https://intern-assignment-vn6o.onrender.com


RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production


COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules


COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm", "run", "start"]
