var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

var val;
app.get("/",function(req,res){
    val="main";  
    res.render("main",{val: val});
});

app.get("/gallery",function(req,res){
    val="gallery";
    res.render("gallery",{val: val});
});


app.get("/events",function(req,res){
    val="events";
    res.render("events",{val: val});
});

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);

app.listen(3000,function(){
    console.log("cosmos is running on port no 3000");
});