

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
})