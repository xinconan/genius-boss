const express = require('express')
const utils = require('utility')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user');

// 获取用户列表
Router.get('/list', (req, res) => {
  User.find({}, (err, list) => {
    if(err) {
      res.json({code: 1, msg: '服务端错误'})
    }else {
      res.json(list)
    }
  })
})


// 注册
Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body;
  User.findOne({user}, (err, doc) => {
    if(doc) {
      return res.json({code: 1, msg: '该用户名已被注册'})
    }
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    userModel.save((er, data) => {
      if (er) {
        return res.json({code: 1, msg: '服务端错误，请稍后重试'})
      }
      const {user, type, _id} = data
      res.cookie('userid', _id)
      return res.json({code:0, data: {user, type, _id}})
    })
  })
})

// 获取用户信息
Router.get('/info', (req, res) => {
  return res.json({code: 1})
})

// 密码md5加密
function md5Pwd(pwd) {
  const salt = 'xinconan_hello_1992&jeming'
  return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router
