FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npx", "ts-node-dev", "--respawn", "src/index.ts"]