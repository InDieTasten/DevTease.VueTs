# Buildtime image
FROM node as build

WORKDIR /app
COPY . .

RUN npm rebuild node-sass && npm run build

# Runtime image
FROM nginx

COPY --from=build /app/dist/ /usr/share/nginx/html
