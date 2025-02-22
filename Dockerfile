FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "serve", "-s", "dist", "-l", "5000" ]
