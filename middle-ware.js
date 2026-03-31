import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

const PORT = 3000;

// middleware to check user credentials 

let username = "Raju kumar";
let password = "1234";
app.get("/",(req,res)=>{
    res.send("This is me body");
})
app.use((req,res,next)=>{
    if(req.body.username === username && req.body.password === password){
        next();
    }
    else{
        res.status(401).json({message:"Unauthorized"});
    }
});

app.use((req,res,next)=>{
    if(req.body.password === password){
        next();
    }
    else{
        res.status(401).json({message:"Unauthorized"});
    }
});

app.use((req,res,next)=>{
    fs.appendFile("./entry.txt",`\n ${req.body.username} logged in at ${Date.toString()}`),
    (err,data)=>{
        if(err)res.status(400).json({err:err.message});
        res.status(200).json({message:"success"});
        next();
    }
})
app.post("/login",(req,res)=>{
    res.status(200).json({message:"success"});
})

app.listen(PORT,()=>{
    console.log("Server is start now ");
})