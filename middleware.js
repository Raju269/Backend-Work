import express from "express";
import fs from "fs"

const app = express();

const PORT = 3000;
app.use(express.json());



app.get("/",(req,res)=>{
    res.end("This is end hole your eyes ");
})
app.use((req,res, next)=>{
    if(req.body.password === password){
        next();
    }else{
        res.status(404).json({message:"invalid credentials"});
    }
})
app.listen(PORT,()=>{
    console.log("I am started now ")
})


// 🔷 What is Middleware? (Simple Explanation)

// In web development (especially in Node.js with Express.js),
// Middleware is a function that runs between request and response.

// 👉 It acts like a checkpoint / filter before the final response is sent.