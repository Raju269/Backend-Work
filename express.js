import express from 'express';
//  console.log(express);

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.end("Hello ji ");
});

app.listen(PORT,()=>{
    console.log("Server is start to run at ",PORT);
})