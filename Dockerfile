FROM node:lts-alpine

WORKDIR /root/app

COPY . .

RUN npm install --only=prod

CMD ["npm", "run", "deploy:prod"]