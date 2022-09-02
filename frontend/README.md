

# Frontend for [gront.org](https://www.gront.org ) website.  

The project still has not been deployed on the main domain, however you can still inspect the current development state [here on vercel](https://gront-website-project.vercel.app/ "a deployment of current main branch on vercel.").  

## Instructions:

1. Make sure that you have the latest LTS version of [node](https://nodejs.org "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.") and you are in **frontend** directory.  

2. Install the packages with:  
`npm install`

3. Install git hooks with ***husky***:  
`npm run prepare`

4. To start developing, run the following command:  
`npm run dev`

5. To have a release build insert the comand below, you should have a *dist* directory ready for deployment under the frontend directory:  
`npm run build`


## Important notes: *please read this before cloning the repository!*

> 1. Never directly push to the main branch, instead follow the practice of making a pull request from your own fork / branch.

> 2. Always make sure that your fork / branch is up to date with the main branch before developing and more importantly, before oppening a pull request.

> 3. Make sure to run `npm install` when you clone the repository for the first time or if there's a new package in the project after updating from the main branch.

> 4. Make sure to run `npm run prepare` when you clone the repository for the first time and no more!!! It is very important that you have the hooks before commiting anything.

> 5. Double check that you have done steps 3 & 4 in the instructions before starting to contribute to the project.

> 6. If you are using Windows and Microsoft Code and have difficulties to run `npm run build`, it is likely due to the fact that you are running the command via *PowerShell* as your terminal. Please change the terminal to *bash* (comes with installing git on windows) and try again.

> 7. While you are working on frontend, it's rarely the case that you would need to run `npm run build` in step *5* from instructions; The *build* command is for the time when you want to either:

>> - have the frontend to be deployed on a seperate backend.

>> - you want to update the backend with your finished frontend development.  

>> If it is the first case for you, just simply copy the `dist` directory in frontend to your external backend. However on the second case, you need to open a new pull request for backend after running the command as it also moves the new frontend directory, *dist*, into the backend with the same name `dist`.
