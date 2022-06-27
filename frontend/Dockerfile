FROM node:16.15.1-alpine

ENV PATH node_modules/.bin:$PATH

COPY package.json ./

RUN npm install

COPY /. ./

EXPOSE 3000