FROM node:10.16-alpine

WORKDIR /usr/app

COPY ./deploy/* /usr/app/

CMD [ "node", "main.js"]
