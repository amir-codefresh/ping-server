FROM node:latest

COPY . /ping-server

WORKDIR /ping-server

RUN npm install
CMD ["npm",  "start"]

EXPOSE 3000:3000