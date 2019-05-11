var express =require("express");
var app=express();
var cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
require('es6-promise').polyfill();
require('isomorphic-fetch');
app.use(express.static(__dirname+"/public"));
var Unsplash=require("unsplash-js").default;
var unsplash=new Unsplash({
    applicationId:'e8bc558b59499171328426f70bb880653ec720f3b3f6b0146f5f017287239e26',
    secret:'59a0af3619aa0a32dda5eeee5168e85a3848bd1bd57012d17c4a1812de79ee60'
});
app.get("/",function(req,res){
    res.send("index.html");
});
app.post("/getPhoto",function(req,res){
    unsplash.search.photos(req.body.keyword,1).then(result=>{
        res.send({url:result.url});
    });
});
app.listen(process.env.PORT||3000,function(){
    console.log("Server running");
});