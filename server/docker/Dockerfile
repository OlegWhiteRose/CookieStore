FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN rm -rf node_modules package-lock.json && npm install

COPY . .

RUN npm run build && npx tsc-alias

EXPOSE 8080

CMD ["node", "dist/app.js"]
