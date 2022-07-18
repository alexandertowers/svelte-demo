FROM node:10
COPY ./ /app
WORKDIR /app
RUN npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx/nginx.conf /etc/nginx/nginx.conf