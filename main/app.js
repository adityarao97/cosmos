var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
    res.render("main");
})

app.listen(3000,function(){
    console.log("cosmos is running on port no 3000");
});