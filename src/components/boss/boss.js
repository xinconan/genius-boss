// boss展现的是牛人列表
import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
  state=> state.chatuser,
  {getUserList}
)
class Boss extends React.Component{
  componentDidMount() {
    this.props.getUserList('genius')
  }
  render() {
    return (
      <div className="user-list">
        {
          this.props.userlist.map(user=>(
            <UserCard key={user.user} user={user}/>
          ))
        }
      </div>
    )
  }
}

export default Boss;