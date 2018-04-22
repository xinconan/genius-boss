import React from 'react'
import {Button, List, InputItem, WhiteSpace, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import Logo from '../../components/logo/logo'

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  register(){
    this.props.history.push('/register')
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  login(){
    this.props.login(this.state)
  }
  render(){
    return (
      <section className="login-container">
        {/*登录成功进行重定向*/}
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />: null}
        <Logo />
        <List renderHeader={()=>'登录页面'}>
          {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
          <InputItem placeholder='请输入用户名' onChange={v=>this.handleChange('user', v)}>用户名</InputItem>
          <InputItem placeholder='请输入密码' type="password" onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
          <Button type="primary" onClick={this.login}>登录</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </section>
    )
  }
}

export default Login;