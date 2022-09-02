[![Fly Deploy](https://github.com/prometeh/gront-website-project/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/prometeh/gront-website-project/actions/workflows/main.yml)

# Backend for [gront.org](https://www.gront.org ) website.  

The project still has not been deployed on the main domain, however you can still inspect the current development state [here on fly.io](https://gront-server.fly.dev/ "a deployment of current main branch on fly.io").  

## Instructions:

1. Make sure that you have the latest LTS version of [node](https://nodejs.org "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.") and you are in **backend** directory.  

2. Install the packages with:  
`npm install`

3. Install git hooks with ***husky***:  
`npm run prepare`

4. To start developing, run the following command:  
`npm run dev`

5. To start the server without nodemon:  
`npm start`


## Important notes: *please read this before cloning the repository!*

> 1. Never directly push to the main branch, instead follow the practice of making a pull request from your own fork / branch.

> 2. Always make sure that your fork / branch is up to date with the main branch before developing and more importantly, before oppening a pull request.

> 3. Make sure to run `npm install` when you clone the repository for the first time or if there's a new package in the project after updating from the main branch.

> 4. Make sure to run `npm run prepare` when you clone the repository for the first time and no more!!! It is very important that you have the hooks before commiting anything.

> 5. Double check that you have done steps 3 & 4 in the instructions before starting to contribute to the project.

> 6. While you are working on backend, it's rarely the case that you would need to run `npm start` in step *5* from instructions; The *start* command is for the time when you want to either:

>> - have the backend to spins up without nodemon for any reason.

>> - deploy the server on a service like heroku as in their default deployment environment, they expect the `start` command for starting the server.  

>  7. If you don't see an updated deployment on your local or hosted services, it is moslty because of having an outdated `dist` directory. To have an updated backend, you need to open a new pull request for backend after running the `npm run build` command inside **frontend** directory. It moves the new frontend directory, *dist*, into the backend with the same name `dist`.
