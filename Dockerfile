FROM nginx:stable-alpine

COPY dist/spa/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
