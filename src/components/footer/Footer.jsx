import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Harmeet Singh Gorowada</a>

            <ul className='permalinks'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                {/* <li>
                    <a href="#experience">Experience</a>
                </li> */}
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/harmeet.singh.376043" target='_blank'><FaFacebookF/></a>
                <a href="https://twitter.com/harmeetsingh727" target='_blank'><IoLogoTwitter/></a>
                <a href="https://www.linkedin.com/in/harmeetsingh7276/" target='_blank'><BsLinkedin/></a>
                <a href="https://github.com/harmeetsingh7276" target='_blank'><BsGithub/></a>
                <a href="https://www.instagram.com/harmeetsingh7276/" target='_blank'><BsInstagram/></a>
                <a href="https://wa.me/+917276720124" target='_blank'><BsWhatsapp/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Harmeet Singh Gorowada. All rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer