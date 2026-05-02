# syntax=docker/dockerfile:1.7

ARG APP_NAME
ARG BUN_VERSION=1.3.4
ARG NODE_VERSION=22


FROM oven/bun:${BUN_VERSION}-alpine AS pruner
ARG APP_NAME
WORKDIR /repo

RUN apk add --no-cache libc6-compat

COPY . .
RUN bunx turbo@2 prune "${APP_NAME}" --docker


FROM oven/bun:${BUN_VERSION}-alpine AS installer
WORKDIR /repo

RUN apk add --no-cache libc6-compat

COPY --from=pruner /repo/out/json/ ./
COPY --from=pruner /repo/out/bun.lock ./bun.lock

RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile


FROM oven/bun:${BUN_VERSION}-alpine AS builder
ARG APP_NAME
WORKDIR /repo

RUN apk add --no-cache libc6-compat

COPY --from=installer /repo/ ./
COPY --from=pruner /repo/out/full/ ./

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV CI=true

RUN bunx turbo build -F "${APP_NAME}"

FROM node:${NODE_VERSION}-alpine AS runner
ARG APP_NAME
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV APP_NAME=${APP_NAME}

RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /repo/apps/${APP_NAME}/.next/standalone/ ./
COPY --from=builder --chown=nextjs:nodejs /repo/apps/${APP_NAME}/.next/static          ./apps/${APP_NAME}/.next/static
COPY --from=builder --chown=nextjs:nodejs /repo/apps/${APP_NAME}/public ./apps/${APP_NAME}/public

USER nextjs

EXPOSE 3000

CMD exec node "apps/${APP_NAME}/server.js"
