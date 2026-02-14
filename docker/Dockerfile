FROM node:18-alpine

WORKDIR /app

RUN npm install -g npm@11.10.0

COPY app/package.json ./
RUN npm install

COPY app/ ./

EXPOSE 3000
CMD ["npm", "start"]