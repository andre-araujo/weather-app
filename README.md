# Weather forecast
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A simple app to do Weather forecast world-wide using [*Parceljs*](https://parceljs.org/) and [*ReactJs*](https://reactjs.org/)

*Location API will only work in dev mode or HTTPS enviroment*

## Usage with node

`node v8.11.1 LTS` or above is recomended for this project

### Install
`npm install` : Get project dependencies

### Run in develop mode
`npm run dev` : Runs in *develop mode* with hot reload, no cashing, and no minification

It will run at [http://localhost:3000]()

### Run in production mode
`npm start` : Runs in *production mode* with a production-ready optimized build

### Build
`npm run build:prod` : Builds the project in *production mode* as an static app a `./dist` folder

## Testing
`npm run test:coverage` : Runs test coverage using jest as a testing tool

## Running security check
`npm run security` : Check security issues with [nsp](https://github.com/nodesecurity/nsp)

## Usage with docker

The [Docker](https://www.docker.com/what-docker) platform leverages Docker containers to enable IT operations teams and Developement teams to build, ship and run any application, anywhere.

This project uses docker to ensure stability in production enviroments.

### Install docker

You can get docker at https://docs.docker.com/install/

### Build the image

`docker build -t weatherapp`

### Running the project

`docker run -p 3000:3000 weatherapp`

## Project stack

- [*Express*](http://expressjs.com/)
  - Node server framework to make a proxy between [Bing API](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR) and the client application
  - Serving the aplication, since it's proxing a service to enable cross-site with Bing API
- [*Parceljs*](https://parceljs.org/)
  - Aplication Bundler
  - Blazing fast, zero configuration web application bundler
  - Choosen for the premise that is a faster bundler
  - Even it has no tree-shaking at version *1.7.1*, it suits this small application
- [*ReactJs*](https://reactjs.org/)
  - A JavaScript library for building user interfaces
  - Fast and well accepted
- [*PostCSS*](http://postcss.org/)
  - Enhancing final css
- [*LessCSS*](http://lesscss.org/)
  - Helps keep styles code clean and organized
- [*CSSModules*](https://github.com/css-modules)
  - Keeps css socpe for each component
- [*nsp*](https://github.com/nodesecurity/nsp)
  - CLI tool to help identify known vulnerabilities in packages
