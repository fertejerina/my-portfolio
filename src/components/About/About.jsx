import React from 'react'
import "./about.css"
import ME from "../../assets/fotoperfil.jpeg"
import AboutCards from './AboutCards'


const About = () => {
  return (
    <section id='about'>
      <h5>Conoce</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <AboutCards/>
          <p> Soy Front-End developer, actualmente me encuentro trabajando en el desarrollo y mantenimiento de páginas web tipo landing y e-commerce en un rol part-time. Además, estoy estudiando la carrera de "Analista Programador Universitario" en la Universidad Nacional de Jujuy para seguir mejorando mis habilidades y conocimientos. Soy una persona transparente y positiva, lo que me permite aportar soluciones efectivas en el trabajo en equipo.</p>
          <a href="#contact" className='btn btn-primary'>Contactame!</a>
        </div>
      </div>
    </section>
  )
}

export default About