# Polk Correspondence

## About

This repository contains all assets for building and deploying the Polk Correspondence project in [exist-db](http://exist-db.org/exist/apps/homepage/index.html).

## Requirements
- [Yarn](https://yarnpkg.com/lang/en/docs/install)
- [Ant](https://ant.apache.org/)
- [NodeJS](https://nodejs.org/en/)

## Building the .xar

To build the Polk papers repository:

1. git clone git@github.com:utkdigitalinitiatives/polk-correspondence-app.git
2. cd polk-correspondence-app
3. ant -f build.xml

## Deploying your .xar

To deploy:

1. Visit the **Dashboard** of your Exist instance. (ex. localhost:8080/exist/apps/dashboard/index.html)
2. Authenticate and click **Package Manager**.
3. Click the **+** icon to upload a package and select your .xar file from the /build directory.


