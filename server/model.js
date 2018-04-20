const mongoose = require('mongoose')
const DB_URL = 'mongodb://10.26.190.95:27017/imooc-chat'
mongoose.connect(DB_URL)

// 创建对应的模型
const models = {
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},
    // 头像
    'avatar': {type: String},
    // 个人简介或职位简介
    'desc': {type: String},
    // 职位名
    'title': {type: String},
    // boos的两个字段
    'company': {type: String},
    'money': {type: String},
  }
}

for(let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: (name)=>{
    return mongoose.model(name)
  }
}