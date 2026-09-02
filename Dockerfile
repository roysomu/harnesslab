FROM node:20-alpine
WORKDIR /usr/src/app

COPY package*.json ./
COPY server.js ./

EXPOSE 8080
USER node
CMD ["node", "server.js"]
