import React from 'react'
import {Button, List, InputItem, Radio, WhiteSpace, WingBlank} from 'antd-mobile'
import Logo from '../../components/logo/logo'

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'genius'
    }
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  login(){
    this.props.history.push('/login')
  }
  register(){

  }
  render(){
    const RadioItem = Radio.RadioItem;
    return (
      <section className="register-container">
        <Logo />
        <List renderHeader={()=>'注册页面'}>
          <InputItem placeholder='请输入用户名'>用户名</InputItem>
          <InputItem placeholder='请输入密码' type="password">密码</InputItem>
          <RadioItem checked={this.state.type==='genius'}>genius</RadioItem>
          <RadioItem checked={this.state.type==='boss'}>boss</RadioItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
          <Button type="primary" onClick={this.register}>注册</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={this.login}>登录</Button>
        </WingBlank>
      </section>
    )
  }
}

export default Register;