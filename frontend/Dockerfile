# Dockerfile for frontend (Vite + React)
FROM node:22-alpine as build

WORKDIR /app

COPY package*.json .

RUN apk add --no-cache git

RUN npm install

COPY . .