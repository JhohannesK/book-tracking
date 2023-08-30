FROM node:14 as build

WORKDIR /app

COPY book-tracking/package*.json ./

RUN npm install

COPY book-tracking/ ./

RUN npm run build

FROM node:14-slim

WORKDIR /app

COPY --from=build /app/.next ./.next

EXPOSE 3000

CMD [ "npm", "start" ]