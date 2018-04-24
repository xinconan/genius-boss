import React from 'react'
import {connect} from 'react-redux'
import {Button,List, WhiteSpace, WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import './user.scss'

@connect(
  state=>state.user
)
class User extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    const props = this.props;
    console.log(props)
    const {Item} = List;
    return props.user?(
      <div>
        <List renderHeader={()=>'简介'}>
          <Item multipleLine>
            {props.title}
            {props.desc.split('\n').map(v=><p className="sub-desc" key={v}>{v}</p>)}
            {props.money?<p className="sub-desc">薪资：{props.money}</p>:null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <WingBlank>
          <Button>退出登录</Button>
        </WingBlank>
      </div>
    ):props.redirectTo?<Redirect to={props.redirectTo}/>:null
  }
}

export default User;