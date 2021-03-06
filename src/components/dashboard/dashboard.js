import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Route,Switch} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import User from '../../container/user/user'
import Boss from '../boss/boss'
import Genius from '../genius/genius'

function Msg(){
  return <h2>msg</h2>
}

@connect(
  state => state
)
class Dashboard extends React.Component{
  render(){
    const {pathname} = this.props.location;
    const user = this.props.user;

    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'Boss列表',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg,
      },
      {
        path: '/user',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User,
      }
    ]


    return (
      <section className="dashboard">
        <NavBar className="fixed-header">{navList.find(v=>v.path===pathname).title}</NavBar>
        <div>
          <Switch>
            {
              navList.map((nav)=>(
                <Route key={nav.path} path={nav.path} component={nav.component}></Route>
              ))
            }
          </Switch>
        </div>
        <NavLinkBar data={navList} />
      </section>
    )
  }
}

export default Dashboard;