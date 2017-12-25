var light=require("./light");
var query=require("./query");
var body=require("./post");
var aa=require("./abc");
var app=light();
app.use(query());
app.use(body())
app.use(aa())
var name="hongsa";
app.listen(5555,function(){
    console.log(app.port,"hongsa");
});
app.get("/login",function (req,res) {
    res.send("登录页");
})
app.get("/",function(req,res,next){
    if(name=="hongsa"){
        next();
    }else{
        res.redirect("/login");
        res.end();
    }
})
app.get("/abc",function(req,res,next){
    res.end("abc");
})
app.get("/ccc",function(req,res,next){
    res.end("ccc");
})