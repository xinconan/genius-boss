import React from 'react'
import {Button, InputItem, NavBar, TextareaItem, WingBlank, WhiteSpace} from 'antd-mobile'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(
  state=> state.user,
  {update}
)
class BossInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      company: '',
      title: '',
      money: '',
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
        <NavBar>完善Boss信息</NavBar>
        <InputItem placeholder="请输入公司名称" onChange={v=>this.handleChange('company', v)}>公司名称</InputItem>
        <InputItem placeholder="请输入招聘职位" onChange={v=>this.handleChange('title', v)}>招聘职位</InputItem>
        <InputItem placeholder="请输入职位薪资" onChange={v=>this.handleChange('money', v)}>职位薪资</InputItem>
        <TextareaItem rows={3} autoHeight 
          onChange={v=>this.handleChange('desc', v)}
          placeholder="请输入职位要求"
          title="职位要求"
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

export default BossInfo