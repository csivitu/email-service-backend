FROM node:15.1.0-alpine3.12

WORKDIR /root/app

COPY . .

RUN npm install --only=prod

CMD ["npm", "run", "deploy:prod"]