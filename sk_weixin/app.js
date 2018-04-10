var express=require('express');
var app=express();
app.listen(7878);
app.configure(function () {
    app.use(app.router);
    app.use(express.static(__dirname+"/public"));
    // app.use(express.favicon(__dirname+"/public/favicon.ico"));
    app.use(express.errorHandler());
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

});
app.post('/index.do',function (req,res) {
    console.log('111111');
    // var myData=
});
