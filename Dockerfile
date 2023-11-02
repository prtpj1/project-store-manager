FROM node:16

WORKDIR /home/node/app

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]