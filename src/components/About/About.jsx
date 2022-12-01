import React from 'react'
import "./about.css"
import ME from "../../assets/fotoperfil.jpeg"
import AboutCards from './AboutCards'


const About = () => {
  return (
    <section id='about'>
      <h5>Know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <AboutCards/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum, tempore recusandae omnis beatae assumenda illum maiores unde deleniti iusto ut odio reiciendis eligendi debitis quos ipsam pariatur alias sunt.</p>
          <a href="#contact" className='btn btn-primary'>Let's talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About