const express=require("express");
const app=express();

app.use(express.static("assets"));




app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});



app.listen(3000,function(req,res)
{
console.log("server is up and running at port 3000");
});
