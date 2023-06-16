import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {MdReviews} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ?'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ?'active' : ''}><AiOutlineUserSwitch/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ?'active' : ''}><RiServiceLine/></a>
      <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav === '#experience' ?'active' : ''}><MdReviews/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ?'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav