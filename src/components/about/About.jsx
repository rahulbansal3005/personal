import React from 'react'
import './about.css'
// import ME_ABOUT from '../../assests/me-about.jpg' 
import ME_ABOUT from '../../assests/original.jpg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={ME_ABOUT} alt="About Image"/>
            </div>
        </div>
        <div className="about_content">
          <p>Experienced Full Stack Developer with over 2 years of hands-on experience
            building scalable services using event-drive architecture. Proficient in both
            front-end and back-end development, with a strong understanding of modern
            web development technologies and frameworks.
          </p>
          <div className="about_cards">

            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2.5+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Backend Technology</h5>
              <small>Java, Node.js, C++, C#</small>
            </article>

             <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Frontend Technology</h5>
              <small>React.js, Javascript, HTML5, CSS, Apache Velocity</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Frameworks</h5>
              <small>Spring, SpringBoot, Spring MVC, Bootstrap,</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Databases</h5>
              <small>MySQL, Oracle, Postgres, Oracle, MongoDB</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>ORM</h5>
              <small>Hibernate, MyBatis</small>
            </article>
          </div>
          
          <a id='letTalk' href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About