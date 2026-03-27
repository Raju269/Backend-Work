import express from "express";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/contact",(req,res)=>{
    // res.end("Hi form contact");
    // res.statusCode = 200;
    // res.end("Hello ji ");
    // res.status(200).json({message:"Hello from contact "})
    fs.readFile("./contact.html", "utf-8",(err,data)=>{
        if(err){
            res.status(404).json({err:err.message});
        }
        res.status(200).send(data)
    })
})

app.get("/home",(req,res)=>{
    res.render("Home");
})
app.listen(PORT,()=>{
    console.log("Now I am start ")
})