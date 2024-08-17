FROM node:alpine AS build

WORKDIR /app

COPY public  public
COPY src     src
COPY webpack webpack
COPY nginx   nginx

COPY ["package.json", "package-lock.json", "tsconfig.json", "webpack.config.ts", "./"]

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]