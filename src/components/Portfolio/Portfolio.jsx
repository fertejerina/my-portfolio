import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis trabajos recientes</h5>
      <h2>Portfolio</h2>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Portfolio 2" />
            <h3>Solutec LandingPage</h3>
          </div>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fertejj/LANDING-SOLUTEC" className='btn' target="_blank">Repository</a>
          <a href="https://www.solutecjuy.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>ToDo List</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fertejj/PLATZI-react-intro" className='btn' target="_blank">Repository</a>
          <a href="https://fertejj.github.io/PLATZI-react-intro/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio 2" />
            <h3>Landing Page HTML CSS</h3>
          </div>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fertejj/mobile-first-layout-course" className='btn' target="_blank">Repository</a>
          <a href="https://fertejj.github.io/mobile-first-layout-course/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio