FROM node:latest

WORKDIR /ping-server

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

CMD ["npm",  "start"]
EXPOSE 3000:3000
