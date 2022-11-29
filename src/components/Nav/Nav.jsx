import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt, FaUserGraduate} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiFillHome/></a>
      <a href="#about"><FaUserAlt/></a>
      <a href="#experience"><FaUserGraduate/></a>
      <a href="#contact"><IoMdMail/></a>
    </nav>
  )
}

export default Nav