# Tech Blog

## Description
Welcome to the 'Tech Blog'!. Here you will be able to view, create, edit, and delete blog posts as a user. This application is a full-stack application, conisisting of a front-end and a back-end. This application uses a server to connect between the front end and a database for CRUD functionality. This application also uses a template engine, Handlebars.js. An extremely difficult challenge when building this application was trying to operate the template engine. Figuring out what variables to pass into handlebars.js got confusing at times. After some time working with Handlebars.js, it has gotten easier. Another challenge was having the front end communicate with the back end. JavaScript uses a series of fetch requests to send that the server will then use when trying to operate with the api. Variable names and values got lost sometimes in the long list of files, but with all things new, you just need a little practice to understand it more. 

## Installation
In order to install this application, you will need to install node.js, npm packages, and run several steps. Execute the following:
1. .env.EXAMPLE -> .env - Add values into the .env file to connect to a database. DB_USER = 'root', DB_PASSWORD = '<password>', SESSION_SECRET = '<value>'
2. 'npm i' - Installs all npm packages
3. 'mysql -u root -p<password>' - Opens mysql
4. 'source db/schema.sql;' - Creates the database
5. 'exit' - Leaves mysql
6. 'npm run seed' - Seeds the database
7. 'node server.js' / 'nodemon' - Run the server

## Usage
This application allows you to view, create, edit, and delete blog posts as a user. First, you will need to login/signup to the application. Once you signup, you will be able to create blog posts within your dashboard. You can also view other users' blog posts and leave comments.

## Screen Recording

## Links
Github Repository: https://github.com/bear-muna/tech-blog