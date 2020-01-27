# Redux
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

It is time to learn about Redux. Redux is a library that helps you manage the state of your application.
In the wild, you will often see Redux used and mentioned alongside React, but today we will be using Redux to manage the state of a node server only application.

## Preface

This repository is big and follows best practices for a more complex RESTful API. The files are split up, aiming to be as small as possible, combining to create complex behavior. Comments are strewn throughout the codebase to make your life a little bit easier. I suggest taking a whiteboard and graphing out the structure of one request once you have added some redux in here. 

This exercise is also very open-ended. Tests and structure act as guidelines and can be modified/deleted, as long as the functionality works.

## Butterfly CI

You will be part of creating a revolutionary new CI service. To quickly get up and running the tasks were split among you and your colleagues:

* Designing and setting up an API - Colleague A took this upon him
* Doing all the hard backend work - The Senior dev loves this kind of thing, so he took it
* Keeping track and changing application state - This task fell on you

## Making REST Requests

[Insomnia](https://insomnia.rest/) is a cross-platform, powerful app that allows you to send REST queries to your API, and you can use it to test your API. Alternatively, you can also use [POSTMan](https://www.getpostman.com/).

## Scripts + Helps

To start your server in production mode:

```
yarn start
```

To start your server in development mode with hot reloading:

```
yarn dev
```

To execute linting:

```
yarn lint
```

To run the mocha tests for your reducers/actions:

```
yarn test:mocha
```

To run a simulated use of your server (basically an integration test):

```
yarn test:simulate
```

To simulate, run mocha tests and lint:

```
yarn test
```

To help you debug, you will find a debug configuration that is ready to go. It will simultaneously start and debug the server and simulation.

## Projects and Builds

There are two main components for the first version: Projects and Builds

Projects contain information about where to get the code and how to execute the tests of a software project as well as some additional meta information. Here is what an example Project could look like when represented with JSON:

```js
{
  "id": "hykjdLm", // We use a string generated with shortid, but you are free to use another datatype
  "name": "vscode",
  "url": "git@github.com:Microsoft/vscode.git",
  "buildCommand": "yarn && yarn test",
  "language": "JavaScript"
}
```

Also, the service keeps track of the builds of projects. Builds take the following shape:

```js
{
  "buildNumber": 65481, // A continuous number incrementing for each build in a project
  "status": "Failed", // One of "Pending" | "Running" | "Success" | "Failed"
  "output": "48 out of 13325 Tests failed."
}
```

## Basic Requirements

You are free to decide the shape of your state and the structure of your files on your own.
The only limitation we impose on you is that you have to use `redux` to manage your state, so you will have to
setup a store and define and use actions and reducers.

*Note:* The tests in this repository are designed to test a specific Redux structure. Since you are free to decide the shape and structure, the tests this time around serve as guidelines rather than requirements. 

You are free to install and use any additional packages to help you. Some are already installed for you. `shortid` generates short unique strings that can be used as id's for projects; you could also use numbers, up to you. You will also find `underscore` listed in the dependencies. You recreated many of its functions back in `LoScore,` so the interface should be familiar!

Your colleagues have left helpful comments all over the code, where they think you will have to either access or modify the global state.

Search for `TODO,` and you should find all the places. Each comment comes with a short description of what you need to do with the data there.

* [ ] Add redux -- Choose a place to put your redux, there currently is none, so you are free to create any structure you like. A suggestion would be to have a redux folder, where you will be placing everything, but it is also okay to have just a file containing redux. One thing to be wary about is that you won't have to worry much about when your store is initialized (do not import your file into the main index.js or butterfly.js to initialize the store). Initialize it in your carved out location and use it from where you need to.
* [ ] Design an appropriate structure to represent your state - do not be afraid to iterate on your approach as you work on other tasks as you will find some designs easier to implement than others.
* [ ] Setup a store, actions and reducers
* [ ] Look at all `TODO` comments and implement the proper operations.
* [ ] For API `TODO,` you will also have to send the correct result. The current implementation always returns error 418.
* [ ] Pass the simulation! Run `yarn test:simulate` to execute it.
* [ ] Write tests for your actions & reducers. Please put them into the `src/__tests__` folder.

## Medium Requirements

Your CI is taking off!! You are getting hammered with traffic! Unfortunately, your server cannot handle it very well and frequently crashes.
This means that all data from before is gone! Oh no!

* [ ] Persist your state and be able to load it up on server start (How you do this is up to you.)

## Advanced Requirements

Congratulations! Your MVP was a success, and companies want to pick up this CI too.
You will have to expand the API and your state to represent the companies needs:

* [ ] Add `users` and `organizations`. Users can register via an Endpoint and can be part of an organization. Organizations can own projects, and only users belonging to an organization can see their projects. No need for fancy authentication, it's okay to include the current user in the request.
      Think about new routes and endpoints that you need and if you have to change your state.

## Nightmare Mode

Oh no, the Senior Dev decided he never wants to come back from his vacation!

* [ ] Implement actual build logic.
  * [ ] Checking out a git project
  * [ ] Running build commands
