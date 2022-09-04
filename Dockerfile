FROM nginx:stable-alpine

COPY dist/spa/ /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
