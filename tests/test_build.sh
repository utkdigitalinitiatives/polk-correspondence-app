#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
cd ../../ && git clone https://github.com/utkdigitalinitiatives/utk-docker-existdb.git utk_exist
cd utk_exist && sed '$d' .env && sed -i 's/BRANCH=master/BRANCH=${BRANCH}/' .env
docker-compose up --build -d