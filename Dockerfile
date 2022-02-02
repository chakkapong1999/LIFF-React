FROM node:14.18.3-alpine
WORKDIR /react
COPY package.json package-lock.json ./
COPY src ./src
RUN npm install
COPY . .

CMD [ "npm","start" ]