import React from 'react'
import CV from '../../assets/cv.pdf'

const HeaderCTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descarga mi CV</a>
        <a href="#contact" className='btn btn-primary'>Email</a>
    </div>
  )
}

export default HeaderCTA