import express from "express";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.get("/",(req,res)=>{
    res.render("Raju")
})

app.listen(PORT,()=>{
    console.log("Raju ka server start hoga hai ")
})