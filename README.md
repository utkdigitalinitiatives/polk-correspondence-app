# Polk Correspondence

## Requirements
- [Yarn](https://yarnpkg.com/lang/en/docs/install)
- Ant

## About

This repository contains assets for deploying the Polk Correspondence project in [exist-db](http://exist-db.org/exist/apps/homepage/index.html).

## Building the .xar

To build the Polk papers archive:

1. git clone git@github.com:utkdigitalinitiatives/polk-correspondence-app.git
2. cd polk-correspondence-app
3. ant -f build.xml

## Deployment of .xar

To deploy:

1. place the .xar file that was created in the autodeploy directory

## React Header to be included in Ant build

### Install Webpack, Babel, and React
1. Go to root directory of project in terminal.
2. Run `yarn`
3. If build process complete, a `node_modules` directory have been generated

### Compiling Custom CSS/JS

- Run webpack build process: 
`yarn build`
- Open react app in browser for active development: `yarn start`

