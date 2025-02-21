# Dockerfile for frontend (Vite + React)
FROM node:22-alpine as build

WORKDIR /app

COPY package*.json .

RUN apk add git

# If git is not already config
# Register name to git
RUN git config --global user.name "Juan Sobalvarro"
# Register email to git
RUN git config --global user.email "juan.sobalvarro@gmail.com"

RUN npm install

COPY . .