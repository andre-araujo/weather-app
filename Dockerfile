FROM node:8.11.1-alpine

WORKDIR /opt/weather-app

COPY package*.json ./

RUN npm install --production

COPY ./ /opt/weather-app

EXPOSE 3000

CMD [ "npm", "start" ]
