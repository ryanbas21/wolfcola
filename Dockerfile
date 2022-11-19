# BASE Image for entire workspace
FROM node:16-alpine as dev

RUN npm install -g pnpm

WORKDIR /app
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY pnpm-workspace.yaml pnpm-workspace.yaml

RUN pnpm install

# setup okteto message
COPY bashrc /root/.bashrc

# Copy the rest of the workspace
COPY . .