FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run build --prod

EXPOSE 4200

FROM nginx:1.15.8-alpine
COPY --from=builder /ng-app/build/app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

