#!/bin/bash

cd ../
NAME=$(git rev-parse --abbrev-ref HEAD)
echo "Clone and Checkout Branch ${NAME}"
cd ../ && git clone https://github.com/utkdigitalinitiatives/utk-docker-existdb.git utk_exist
cd utk_exist && sed "$d" .env && sed -i "s/BRANCH=master/BRANCH=${NAME}/" .env
docker-compose up --build -d