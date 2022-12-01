import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className='service'>
                <div className='service__head'>
                    <h3>Landing Page Creation</h3>
                </div>

                <ul className='service__list'>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Page development</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Personal service</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Domain of your choice (.com, .net, store, etc)</p>
                  </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                    <h3>Computer formatting and maintenance</h3>
                </div>

                <ul className='service__list'>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Formatting of Pc and Notebooks.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>PC cleaning and maintenance.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Software Installation</p>
                  </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services