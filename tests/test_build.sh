#!/bin/bash

cd ../
NAME=$(git branch | grep \* | cut -d ' ' -f2)
echo "Clone and Checkout Branch ${NAME}"
cd ../ && git clone https://github.com/utkdigitalinitiatives/utk-docker-existdb.git utk_exist
cd utk_exist && sed "$d" .env && sed -i "s/BRANCH=master/BRANCH=${NAME}/" .env
docker-compose up --build -d