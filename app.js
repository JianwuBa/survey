var express = require("express");
var app = express()
var formidable = require("formidable")
var mogoose = require("mongoose");
//引入类
var Survey = require("./models/Survey")
app.use(express.static("assets"));
//连接数据库
mogoose.connect("mongodb://localhost/bai")
app.post("/form",function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req,function (err,fields,files) { 
        console.log(fields)
        Survey.create({
        "object1":fields.object1,
        "object2":fields.object2,
        "object3":fields.object3
        },function (err) {
            if(!err){
                res.json({"result":"success"})
            }
        })
     })
})
app.get("/object:id",function (req,res) {
    console.log(req.params.id)
    if(req.paramms.id == 1){
        Survey.count({"object1":"0"},function (err,count_0) {
            console.log(count_0)
        })
    }
})
app.listen(3000)