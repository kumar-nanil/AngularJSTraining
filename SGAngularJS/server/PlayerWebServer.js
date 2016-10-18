//Sample Express 
var express=require('express');
var cors=require('cors');
var fs=require('fs');

var app=express();
app.use(cors());
//Exposing a Server
app.get('/players',function(req,res) {
    fs.readFile(__dirname+"/"+"Player.json",'utf-8',function(err,data){
       res.end(data); 
    });
});

app.listen(8888, function(){
    console.log("Server started ");
})