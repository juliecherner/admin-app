#! /bin/bash

docker-compose up -d && \

cd client && npm install && npm run start &

cd server && npm install && npm run start

