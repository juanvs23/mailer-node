const express= require('express'),
     path=require('path'),
     app=express(),
     port=3000,
     host="http://localhost/",
     {router}=require('./routes/index');
     app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.use(express.static('public'));
app.listen(port,function(){
    console.log(`run server ${host}:${port}`);
});
