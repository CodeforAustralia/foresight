# Use an official Node runtime as a parent image
FROM node:8.9.4-alpine

ENV NODE_ENV="dev"
ENV CONFIG_FLAGS="--production"

COPY package.json /src/
COPY yarn.lock /src/

WORKDIR /src

RUN apk add --update libc6-compat \
    && yarn install ${CONFIG_FLAGS}

COPY index.js /src/

EXPOSE 8180 8080 8443 80 443
CMD ["node", "-v"]
