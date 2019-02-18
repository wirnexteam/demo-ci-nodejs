FROM node:11.9.0-alpine

RUN env

COPY package*.json /opt/app/

WORKDIR /opt/app

RUN npm install --loglevel=warn

COPY ./ /opt/app/lib

EXPOSE ${PORT:-80}
