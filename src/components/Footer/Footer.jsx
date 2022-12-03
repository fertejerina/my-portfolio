import React from 'react'
import "./footer.css"
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">FerTejj</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
       <a href="https://www.linkedin.com/in/fernando-javier-tejerina-arg" target="_blank"><BsLinkedin/></a> 
       <a href="https://github.com/fertejj" target="_blank"><BsGithub/></a> 
       <a href="https://www.instagram.com/fertejerina97" target="_blank"><BsInstagram/></a> 
      </div>
      <div className="footer__copyright">Made by fertejj.</div>
    </footer>
  )
}

export default Footer