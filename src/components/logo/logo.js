import React from 'react'
import logoImg from './logo.svg'

class Logo extends React.Component{
  render(){
    return (
      <section className="logo-container">
        <img src={logoImg} alt=""/>
      </section>
    )
  }
}

export default Logo;