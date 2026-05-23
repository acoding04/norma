# syntax=docker/dockerfile:1
FROM node:22-alpine AS build

WORKDIR /app

ARG NPM_REGISTRY=https://registry.npmjs.org/

RUN --mount=type=secret,id=ca_cert \
    if [ -f /run/secrets/ca_cert ]; then \
        cp /run/secrets/ca_cert /etc/ssl/certs/custom-ca.crt && \
        npm config set cafile /etc/ssl/certs/custom-ca.crt; \
    fi && \
    npm config set registry "$NPM_REGISTRY"

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
