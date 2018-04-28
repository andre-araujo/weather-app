FROM node:8.11.1-alpine

COPY ./ /opt/weather-app
WORKDIR /opt/weather-app

EXPOSE 3000
RUN npm install --production

CMD ["npm", "run", "start:prod"]
