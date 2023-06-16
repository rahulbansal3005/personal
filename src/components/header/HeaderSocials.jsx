import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/harmeetsingh7276/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/harmeetsingh7276" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/harmeetsingh7276/" target='_blank'><BsInstagram/></a>
        <a href="https://wa.me/+917276720124" target='_blank'><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials