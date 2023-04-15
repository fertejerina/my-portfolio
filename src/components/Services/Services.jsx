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
                    <h3>Desarrollo de Landing Page</h3>
                </div>

                <ul className='service__list'>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Desarrollo de la pagina</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Atencion personalizada</p>
                  </li>
                                    <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Agregado de funcionalidades especificas</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Dominio de tu eleccion (.com, .net, store, etc)</p>
                  </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                    <h3>Limpieza y mantenimiento de PC</h3>
                </div>

                <ul className='service__list'>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Limpieza fisica del ordenador.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Mantenimiento de software/SO.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Instalacion de programas.</p>
                  </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services