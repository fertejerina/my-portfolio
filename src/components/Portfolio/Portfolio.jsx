import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"

const projects = [
  {
    img: IMG3,
    title: "Solutec LandingPage",
    repoLink: "https://github.com/fertejj/LANDING-SOLUTEC",
    demoLink: "https://www.solutecjuy.com/",
  },
  {
    img: IMG1,
    title: "ToDo List",
    repoLink: "https://github.com/fertejj/PLATZI-react-intro",
    demoLink: "https://fertejj.github.io/PLATZI-react-intro/",
  },
  {
    img: IMG2,
    title: "Landing Page HTML CSS",
    repoLink: "https://github.com/fertejj/mobile-first-layout-course",
    demoLink: "https://fertejj.github.io/mobile-first-layout-course/",
  },
];

const PortfolioItem = ({ img, title, repoLink, demoLink }) => (
  <article className='portfolio__item'>
    <div className="portfolio__item-image">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
    <div className="portfolio__item-cta">
      <a href={repoLink} className='btn' target="_blank" rel="noopener noreferrer">Repository</a>
      <a href={demoLink} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </article>
);

const Portfolio = () => (
  <section id='portfolio'>
    <h5>Mis trabajos recientes</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {projects.map((project, index) => (
        <PortfolioItem
          key={index}
          img={project.img}
          title={project.title}
          repoLink={project.repoLink}
          demoLink={project.demoLink}
        />
      ))}
    </div>
  </section>
);

export default Portfolio;
