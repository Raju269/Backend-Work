import express from "express";

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.end("Backend is running ");
});

app.listen(PORT,()=>{
    console.log("Server running on port 3000");
});


// What is Nodejs ?
// Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

// What is express ?
// Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.

// What is http ?
// The http module in Node.js provides a way to create an HTTP server and handle HTTP requests and responses.

// What is dotenv ?
// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

// What is nodemon ?
// Nodemon is a tool that monitors changes in your Node.js application and automatically restarts the server when changes are detected

// Why Node.js?

// Node.js is a popular choice for building server-side applications because it provides a non-blocking, event-driven model that allows you to build scalable and high-performance applications.

// Node.js is a server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. 

// Core Concepts of Node.js

// Node.js is a server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

// Non-Blocking I/O

// Node.js is a server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

// Event-Driven Model   

// Node.js is a server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

// Asynchronous Programming

// Node.js is a server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

// Single-Threaded Model

// Node.js is a server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

// 3. Modules in Node.js

// 🔹 Built-in Modules

// http => http module
// fs => file system
// path => file path
// os => Operating System
// url => url module
// util => utility module
// events => event module
// net => network module
// tls => transport layer security
// zlib => compression
// crypto => encryption
// stream => stream module
// http2 => http2 module
 
// 📦 7. NPM (Node Package Manager)
// what is NPM ?

// NPM is a package manager for JavaScript packages, or modules as they are often known.

// Why NPM ?
// NPM is a package manager for JavaScript packages, or modules as they are often known.

// npm init -y
// npm install express
// npm install nodemon --save-dev
// npm install dotenv --save-dev
// npm install bcrypt --save-dev
// npm install jsonwebtoken --save-dev

// 🔹 Third-party Modules

// express => express
// body-parser => body-parser
// mongoose => mongoose
// ejs => ejs
// morgan => morgan
// nodemon => nodemon
// dotenv => dotenv
// bcrypt => bcrypt
// jsonwebtoken => jsonwebtoken
// cookie-parser => cookie-parser
// cors => cors
// helmet => helmet
// morgan => morgan
// rate-limit => rate-limit
// swagger-jsdoc => swagger-jsdoc
// swagger-ui-express => swagger-ui-express
