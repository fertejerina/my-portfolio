import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/fernando-javier-tejerina-arg" target="_blank"><BsLinkedin/></a> 
       <a href="https://github.com/fertejj" target="_blank"><BsGithub/></a> 
       <a href="https://www.instagram.com/fertejerina97" target="_blank"><BsInstagram/></a> 
    </div>
  )
}

export default HeaderSocials