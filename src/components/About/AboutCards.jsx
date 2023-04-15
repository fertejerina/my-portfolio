import React from 'react'
import './about.css'
import {FaAward, FaFlag} from "react-icons/fa"
import {BsBookFill} from "react-icons/bs"

const AboutCards = () => {
  return (
    <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia Laboral</h5>
              <small>+6 meses trabajando</small>
            </article>

            <article className='about__card'>
              <BsBookFill className='about__icon'/>
              <h5>Capacitacion</h5>
              <small>+1 año y 6 meses formandome</small>
            </article>

            <article className='about__card'>
              <FaFlag className='about__icon'/>
              <h5>Pais</h5>
              <small>Argentina</small>
            </article>
          </div>
  )
}

export default AboutCards