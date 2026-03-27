

<<<<<<< HEAD
<<<<<<< HEAD
// Node.js HTTP Module

// The 'http' module allow Node.js to transfer data over the Hyper Text Tranfer  Protocol (HTTP).

// It is primarily used to create web servers that can listen for incoming requests and send responses.


import http from "http";

/*

 Creating a Server
 The createServer() method creates a new HTTP server. take a callback function that is executed whenever a request is made to the server.

 The callback has two main parameters;

 req: The request object, which contains information about the incoming request, such as the URL, headers, and body.
 res: The response object, which is used to send a response back to the client.

*/

const PORT = 3000;
const server = http.createServer((req,res)=>{
    // req.url: The URL of the incoming request.
    // req.method: The HTTP method of the incoming request.
    // res.end(): The method used to send a response back to the client.   // req.url: The URL path of the request (e.g., '/', '/contact')
  // req.method: The HTTP method (e.g., 'GET', 'POST')

    // res.setHeader(): Sets HTTP response headers
  // res.statusCode: Sets the HTTP status code (e.g., 200 for OK, 404 for Not Found)

//   what is setHeader
// The setHeader() method is used to set HTTP response headers. It takes two arguments: the name of the header and the value of the header.
// what is statusCode
// The statusCode property is used to set the HTTP status code of the response. It is a number between 100 and 600.
// What is req.method
// The req.method property is used to get the HTTP method of the incoming request.
// What is res.end
// The res.end() method is used to send a response back to the client.
// what is req.url
// The req.url property is used to get the URL of the incoming request.

    console.log(req.url);
    console.log(req.method);
    // res.end("Hello world");



if(req.url === '/'){
    res.end("Hello world This your Home apge ");
}
else if(req.url === '/about'){
    res.end("Hello world This your About apge ");
}
else if(req.url === '/contact'){
    res.end("Hello world This your Contact apge ");
}
else if(req.url === '/products'){
    res.end("Hello world This your Products apge ");

}
else{
    res.stateCode = 404;
    res.end("Page not found");
}

});

// Listening for Request 
//  * The listen() method starts the server and makes it listen for connections 
//  * on a specified port.
// what i s listen for request
// The listen() method starts the server and makes it listen for connections on a specified port.

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});




//  * 3. Transition to Express
//  * While the 'http' module is powerful, it becomes difficult to manage as the application grows.
//  * Express.js is a framework built ON TOP of the 'http' module that simplifies:
//  * - Routing (path handling)
//  * - Middleware (authentication, logging, etc.)
//  * - Parsing request bodies (JSON, forms)
//  */






=======
=======
>>>>>>> 8c0caf8f4590259c69efb56c13b3948d412b4ac4
import express from "express";
import { json } from "node:stream/consumers";
// console.log(express);

// middle ware
app.use(expressjson())

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.end("Hi from server is started now ");
})


app.get("/contact",(req,res)=>{
    res.end("Hi from contact information ");
    // res.statusCode = 202;
    // res.end("Hi");
    res.status(200).json({message:"Hello from contact"});
});


app.post("/login",(req,res)=>{
    res.status(200).json({message:"login Successful"});
})

app.listen(PORT,()=>{
    console.log("Server is started now ")
<<<<<<< HEAD
})
>>>>>>> 8c0caf8f4590259c69efb56c13b3948d412b4ac4
=======
})
>>>>>>> 8c0caf8f4590259c69efb56c13b3948d412b4ac4
