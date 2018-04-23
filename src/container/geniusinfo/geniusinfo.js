import React from 'react'
import {Button, InputItem, NavBar, TextareaItem, WingBlank, WhiteSpace} from 'antd-mobile'

class GeniusInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      desc: ''
    }
  }
  handleChange(key,value) {
    this.setState({
      [key]: value
    })
  }
  render(){
    return (
      <section className="boss-info">
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
          <Button type="primary">完成</Button>
        </WingBlank>
      </section>
    )
  }
}

export default GeniusInfo