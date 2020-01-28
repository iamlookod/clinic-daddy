FROM node:lts-alpine

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /app
COPY . .
RUN npm install

CMD ["npm","run", "start"]
