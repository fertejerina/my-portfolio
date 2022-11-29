import React from 'react'
import CV from '../../assets/cv.pdf'

const HeaderCTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
        <a href="#contact">Contact</a>
    </div>
  )
}

export default HeaderCTA