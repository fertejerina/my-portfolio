import React from 'react'
import "./footer.css"
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">fertejj</a>
      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className='footer__socials'>
       <a href="https://www.linkedin.com/in/fertejj/" target="_blank"><BsLinkedin/></a> 
       <a href="https://github.com/fertejj" target="_blank"><BsGithub/></a> 
       <a href="https://www.instagram.com/fertejerina97" target="_blank"><BsInstagram/></a> 
      </div>
      <div className="footer__copyright">Hecho por fertejj.</div>
    </footer>
  )
}

export default Footer