FROM node:lts-alpine

WORKDIR /root/app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY . .

CMD ["npm", "run", "deploy:prod"]
