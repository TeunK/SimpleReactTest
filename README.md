# Simple Test

## This application consists of 3 components

- [ReactJS](https://facebook.github.io/react/) Client `SimpleReactTest/client/my-app/src/`

- [NodeJS](https://nodejs.org/) Server `SimpleReactTest/server/`

- [MongoDB](https://www.mongodb.com/) Database `SimpleReactTest/server/`

The use of [React-Redux](http://redux.js.org/) may also be worth mentioning as it allows the sharing of singleton components and tightly follows the principles of a finite state machine. This is especially useful for testing as any state can be precisely recreated simply by inserting it into the components.

## Details on installation and starting up the servers

##### DATABASE
If you want to run this yourself, and you have not already installed MongoDB, [Use this guide to install MongoDB](https://docs.mongodb.com/manual/installation/)

To activate the database, run the following command after pointing to the MongoDB installation folder in your system environment variables:

$ mongod --dbpath FILEPATH

Note: FILEPATH should be the data folder, i.e. `SimpleReactTest/server/data/`.

##### BACKEND SERVER: 
Ensure NodeJS is installed, so that you can use `npm install` to automatically install all the required dependencies of the  project. Then, using the command terminal from inside the `SimpleReactTest/server` folder, run the following command
$ npm start

This should use the default port of `3000`

##### FRONTEND CLIENT

To startup the (frontend) client, again, ensure NodeJS is installed so that you can use `npm install` to automatically install all the required dependencies of the project. Then from inside the client project `SimpleReactTest/client/my-app/src/`, run `npm install`, and then `npm start` in order to start the front-end server. This should attempt to start up the (backend server) at default port `3000`, but will request you to change this (to 3001) as you are already running the back-end server on port 3000. So accept by entering 'y', and now you should be running the server at port 3001. Now you can view the app at `http://localhost:3001/` in the web browser.


## Screenshots


##### Home screen
![alt text](https://i.gyazo.com/9e82b53c60efc1ea4bb083f424e297cd.jpg)

##### Front and Back-end validation
![alt text](https://i.gyazo.com/a1056a2646499e8aca33dd09768892c5.jpg)

##### Exact email format requirement
![alt text](https://i.gyazo.com/dd227af1acc5cceb8ffd8d6b7d3d0e89.gif)

##### Server registration response
![alt text](https://i.gyazo.com/5f26480385d7a2e09e9dc33357b9fbbc.jpg)

##### Get list of registered students
![alt text](https://i.gyazo.com/ef2c2da3c9ff7827085e3260c5e33420.jpg)

##### Dashboard requires authentication
![alt text](https://i.gyazo.com/e6518e4ad1bf3bd4175742d58009dd76.jpg)

##### Dashboard when authenticated
![alt text](https://i.gyazo.com/14b606de5c16554067dc207e2967ef00.jpg)
