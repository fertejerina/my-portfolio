import React from 'react'
import './about.css'
import {FaAward, FaBirthdayCake} from "react-icons/fa"
import {BsBookFill} from "react-icons/bs"

const AboutCards = () => {
  return (
    <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+3 Months Working</small>
            </article>

            <article className='about__card'>
              <BsBookFill className='about__icon'/>
              <h5>Studies</h5>
              <small>+1 Year Preparing</small>
            </article>

            <article className='about__card'>
              <FaBirthdayCake className='about__icon'/>
              <h5>Age</h5>
              <small>25 Years Old</small>
            </article>
          </div>
  )
}

export default AboutCards