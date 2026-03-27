import express from "express";

const app = express();
const PORT = 5000;

app.get("/home",(req,res)=>{
    res.send("This is me body");
})

app.listen(PORT,()=>{
    console.log("Server is start now ");
})