# tourmanique-ui

## Description
A project to determine the uniqueness of a photo by its components. UI application.

## Quick Start

``` 
npm ci

npm start
``` 

## Common commands

### `npm ci`

Installs modules guided by the package-lock.json lock file. This allows you to create reproducible builds: you get exactly what you expect with each installation.

### `npm start`

Run the application in development mode.
Open http://localhost:5501/ with local env variables.

The page will automatically reload after any changes to the code.

### `npm run start:dev`

Run the application in development mode.
Open http://localhost:5501/ with dev env variables.

The page will automatically reload after any changes to the code.

### `npm run cypress:run`
For it to work properly, you must first run the command `npm start`.

This command will find all the tests in the project, then it will run all the test and output the result to the terminal.

### `npm run cypress:component` 
For it to work properly, you must first run the command `npm start`.

This command will open the Cypress launchpad with component testing in the Chrome browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `npm run preview`

The command will boot up a local static web server that serves the files from dist at http://localhost:4173. 

It's an easy way to check if the production build looks OK in your local environment.

## husky with nvm

If on commit you see this kind of error `.husky/commit-msg: line 5: npm: command not found` and you are using nvm you might need to create ~/.huskyrc with
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
Source: https://stackoverflow.com/questions/67063993/sh-husky-command-not-found

## Dockerfile
<br />

In our projects we use [Docker](https://docs.docker.com/build/) to publish our website and the first thing we need to get it right is Dockerfile.

This is a pre-file, a set of instructions which are needed to write the image. It describes what should be there in the image and what commands, dependencies, and processes it will contain. 

When you run the docker run command, the program first checks if the required image is in the local storage.

### Build

```bash
docker build -t tourmanique-ui .
```

### Run
```bash
docker run --detach --publish 9551:80 --rm --name tourmanique-ui --env ENV_KEY="'dev'" --env API_ROOT="'http://localhost:7501/api'" tourmanique-ui
```