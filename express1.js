import express from 'express';
import fs from 'fs';
import ejs from 'ejs';
import path from 'path'
import { url  } from 'inspector';
// console.log(express)

const app = express();

app.use(express.json());
const PORT = 3000;

app.set("view engine","ejs");
app.set("views","views");
app.get("/",(req,res)=>{
    res.end("hi from server");
})

app.get("/contact",(req,res)=>{
    // res.end("hi from contact ");
    // res.statusCode =200;
    // res.end("Hi form Raju ")
    // res.status(200).json({message:"Hello from contact bro Raju kumar "});
    fs.readFile("./Home_page.html",'utf-8',(err,data)=>{
        if(err) res.status(404).json({err:err.message});
        res.status(200).send(data);
    })

})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.status(200).json({message:"Your login successfully "});
})

app.get("/home",(req,res)=>{
    res.render("home");
})
app.get('/product',(req,res)=>{
        // res.json("./product.json")
        fs.readFile("./product.json",'utf-8',(err,data)=>{
            if(err) res.status(404).json({message:"page not founded "});
            res.status(200).json(data);
        })
})
app.listen (PORT,()=>{
    console.log("server is started ");
})