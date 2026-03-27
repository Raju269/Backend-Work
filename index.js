import express from "express";

const app = express();
// set view engine 
// app.set("view engine","ejs");
app.set("view engine", "ejs");

// route
app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(5000,()=>{   
    console.log("Server is running on port 5000")
})