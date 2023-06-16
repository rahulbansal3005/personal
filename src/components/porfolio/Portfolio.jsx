import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
// import IMG3 from '../../assests/portfolio3.jpg'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'Portfolio Website',
    github:'https://github.com/harmeetsingh7276/Personal-Portfolio-Website',
    // demo:'https://harmeetsinghgorowada.vercel.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'User based Hotel Rating Microservices',
    github:'https://github.com/harmeetsingh7276/SpringBoot-UserBaseHotelRating',
    // demo:'https://github.com/harmeetsingh7276/SpringBoot-UserBaseHotelRating'
  },
  {
    id:3,
    image:IMG3,
    title:'Kafka Application - For Message Queueing',
    github:'https://github.com/harmeetsingh7276/SpringBoot-Kafka-Real-World-Project',
    // demo:'https://dribbble.com/Alien_pixels'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} target='_blank' className='btn'>GitHub</a>
                  {demo !=null &&
                    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                  }
                </div>
              </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio