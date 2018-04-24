import React from 'react'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'

class UserCard extends React.Component{
  render(){
    let {user} = this.props;
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        <Card>
          <Card.Header title={user.user} extra={user.title}></Card.Header>
          <Card.Body>
            {user.type==='boss'? <div>公司：{user.company}</div> :null}
            {user.type==='boss'? <p>职位要求：</p> :null}
            {user.desc.split('\n').map(v=>(
              <p key={v}>{v}</p>
            ))}
            {user.type==='boss'? <div>薪资：{user.money}</div> :null}
          </Card.Body>
        </Card>
      </WingBlank>
    )
  }
}

export default UserCard;
