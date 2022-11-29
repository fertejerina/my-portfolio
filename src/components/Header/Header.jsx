import React from 'react'
import './header.css'
import HeaderCTA from './HeaderCTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Fer Tejerina</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <HeaderCTA/>
      </div>
    </header>
  )
}

export default Header