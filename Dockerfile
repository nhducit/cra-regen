FROM node:10.15.0-jessie

# create app directory
RUN mkdir -p /usr/src/web
WORKDIR /usr/src/web

# install dependencies
COPY package.json yarn.lock ./
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

COPY . /usr/src/web

EXPOSE 8086

# RUN yarn build:bsb

RUN yarn start:full
