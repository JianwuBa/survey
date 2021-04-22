var mongoose = require("mongoose");
//创建Schema  表头
var SurveySchema = new mongoose.Schema({
    "object1":String,
    "object2":[String],
    "object3":String
})
// 创建models  创建类
var Survey = mongoose.model("Survey",SurveySchema)
// 向外暴露
module.exports = Survey
