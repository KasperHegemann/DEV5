FROM node:16

WORKDIR /skaters

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8888

CMD ["npm", "start"]