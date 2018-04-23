import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {loadData} from '../../redux/user.redux'

// 获取用户信息，判断是否登录以及对应的角色
// 通过withRouter可以将组件包装成路由组件，这样就可以使用react-router提供的功能
@withRouter
@connect(
  null,
  {loadData}
)
class AuthRoute extends React.Component{
  componentDidMount(){
    // 不需要判断登录的页面
    const publicPath = ['/login', '/register']
    if (publicPath.indexOf(this.props.location.pathname) > -1) {
      return ;
    }
    axios.get('/user/info').then((res) => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          // 用户已登录
          this.props.loadData(res.data.data)
        }else{
          // 用户未登录
          this.props.history.push('/login')
        }
      }
    })
  }
  render(){
    return null
  }
}

export default AuthRoute