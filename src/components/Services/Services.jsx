import React from "react";
import "./services.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>Los servicios que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo de Paginas Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Diseño de proyecto a medida.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Atencion personalizada.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Agregado de funcionalidades especificas.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Dominio personalizado (.com, .net, store, etc).</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Servicio Tecnico y Mantenimiento de Equipos</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Limpieza y mantenimiento de Computadoras y Consolas.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Formateo e Instalacion de SO.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Instalacion y Configuracion de Programas para oficinas.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Asesoramiento tecnologico.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Actualizacion y armado de equipos.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
