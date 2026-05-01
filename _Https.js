import https from 'http';
// console.log(https)


const PORT = 3000;

const server = https.createServer((req,res)=>{
    // console.log(req);
    // console.log("This is end now ")
    // console.log(res);
    // console.log("this is new line ");
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.body);

    // Set header wala part 
    res.statusCode = 200;
    res.setHeader("author","Raju");
    res.setHeader("dataformat","application/text");
    // res.end("Hello world ");
    // res.sendDate("Hello ji ")
    if(req.url === '/contact'){
        res.end("Hello ji form contact pages");
    }
    if(req.url === '/product'){
        res.end("Hello bro hi for xyz is started now ");
    }
});

server.listen(PORT,()=>{
    console.log("Server is runnig started ");
})