import http from "http";
// console.log(http);

const PORT = 3000;

const server = http.createServer((req,res)=>{
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.body);
    // res.end("Hello bro kaise hoga");
    // res.setHeader(author,"Rajukumar");
    // res.statusCode = 200;
    // res.setHeader("author","Raju kumar");
    // res.setHeader("dataformat","application/text"); 
    if(req.url === "/contact"){
        res.end("Hello from contact pages ");
    }
    if(req.url === "/products"){
        res.end("Hello for xyz you can go to learn ");
    }
    res.end("hello ji ");
});

server.listen(PORT,()=>{
    console.log("Server is started now ")
})