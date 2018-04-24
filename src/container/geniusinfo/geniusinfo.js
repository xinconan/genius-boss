import React from 'react'
import {Button, InputItem, NavBar, TextareaItem, WingBlank, WhiteSpace} from 'antd-mobile'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(
  state=> state.user,
  {update}
)
class GeniusInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      desc: ''
    }
    this.doUpdate = this.doUpdate.bind(this)
  }
  handleChange(key,value) {
    this.setState({
      [key]: value
    })
  }
  doUpdate(){
    this.props.update(this.state)
  }
  render(){
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <section className="boss-info">
        {redirect && redirect !== path? <Redirect to={redirect}/>:null}
        <NavBar>完善牛人信息</NavBar>
        <InputItem placeholder="请输入求职岗位" onChange={v=>this.handleChange('title', v)}>求职岗位</InputItem>
        <TextareaItem rows={3} autoHeight 
          onChange={v=>this.handleChange('desc', v)}
          placeholder="请输入个人简介"
          title="个人简介"
          >
        </TextareaItem>

        <WhiteSpace/>
        <WingBlank>
          {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
          <Button type="primary" onClick={this.doUpdate}>完成</Button>
        </WingBlank>
      </section>
    )
  }
}

export default GeniusInfo