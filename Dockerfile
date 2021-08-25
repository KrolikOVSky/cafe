FROM node:14.17.5-alpine
#ENV NODE_ENV enviroment
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]