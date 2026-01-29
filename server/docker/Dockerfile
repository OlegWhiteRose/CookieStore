FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci --only=production && npm install typescript tsc-alias tsconfig-paths

COPY . .

RUN npm run build && npx tsc-alias

EXPOSE 8080

CMD ["node", "dist/app.js"]
