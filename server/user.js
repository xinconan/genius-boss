const express = require('express')
const utils = require('utility')

const Router = express.Router()
const models = require('./model')
const User = models.getModel('user');
// 过滤不返回的字段
const filter = {pwd: 0, __v:0}

// 获取用户列表
Router.get('/list', (req, res) => {
  const { type } = req.query;
  User.find({type}, filter, (err, list) => {
    if(err) {
      res.json({code: 1, msg: '服务端错误'})
    }else {
      res.json({code: 0, data: list})
    }
  })
})

// 登录
Router.post('/login', (req, res) => {
  const {user, pwd} = req.body;
  User.findOne({user,pwd: md5Pwd(pwd)}, filter, (err, doc) => {
    if (!doc) {
      return res.json({code:1, msg: '用户名或密码错误'})
    }
    // 保存cookie
    res.cookie('userid', doc._id)
    return res.json({code:0, data: doc})
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
      // 保存cookie
      res.cookie('userid', _id)
      return res.json({code:0, data: {user, type, _id}})
    })
  })
})

// 获取用户信息
Router.get('/info', (req, res) => {
  const {userid} = req.cookies
  if (!userid) {
    return res.json({code: 1})
  }
  User.findOne({_id: userid}, filter, (err, doc) => {
    if(err) {
      return res.json({code: 1, msg: '服务器错误'})
    }
    if (doc) {
      return res.json({code: 0, data: doc})
    }
  })
})

// 更新用户信息
Router.post('/update', (req, res) => {
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({code: 1})
  }
  const body = req.body;
  User.findByIdAndUpdate(userid, body, (err, doc) => {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body);
    return res.json({code: 0, data})
  })
})

// 密码md5加密
function md5Pwd(pwd) {
  const salt = 'xinconan_hello_1992&jeming'
  return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router
