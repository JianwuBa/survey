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
app.get("/object/:id",function (req,res) {
    var result = req.params.id;
    if(result == 1){
        Survey.count({"object1":"0"},function(err,count_0){
            Survey.count({"object1":"1"},function(err,count_1){
                Survey.count({"object1":"2"},function(err,count_2){
                    Survey.count({"object1":"3"},function(err,count_3){
                        Survey.count({"object1":"4"},function(err,count_4){
                            res.json({
                                "success":true,
                                "data":{"A":count_0,"B":count_1,"C":count_2,"D":count_3,"E":count_4}
                            })
                        })
                    })
                })
            })
        })
    }else if(result == 2){
        Survey.count({"object2":"0"},function(err,count_0){
            Survey.count({"object2":"1"},function(err,count_1){
                Survey.count({"object2":"2"},function(err,count_2){
                    Survey.count({"object2":"3"},function(err,count_3){
                        res.json({
                            "success":true,
                            "data":{"A":count_0,"B":count_1,"C":count_2,"D":count_3}
                        })
                    })
                })
            })
        })
    }
})
app.get("/object")
app.listen(3000)