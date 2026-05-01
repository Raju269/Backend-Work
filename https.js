import http from 'http';
// console.log(http);
const PORT = 3000;
const server = http.createServer((req,res)=>{
    console.log("Requested are recevied ")
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("author","Raju");
    // res.end("Hello kaise hai sab");
    if(req.url==='/'){
        res.end("This is home page ");
    }
    if(req.url==='/contact'){
        res.end("Hello from contact pages ");
    }
    if(req.url==='/products'){
        res.end("Hello from product ");
    }
    
  if (req.url === "/12") {
    res.end("Hello from Home Page");
  } else if (req.url === "/contact12") {
    res.end("Hello from Contact Page");
  } else if (req.url === "/product12") {
    res.end("Hello from Product Page");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});
    

server.listen(PORT,()=>{
    console.log("Server is stared ")
})



