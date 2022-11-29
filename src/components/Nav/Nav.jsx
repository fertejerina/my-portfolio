import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt, FaUserGraduate} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? 'active' : ''}><FaUserGraduate/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}><IoMdMail/></a>
    </nav>
  )
}

export default Nav