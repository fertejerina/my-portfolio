import React from "react";
import "./about.css";
import ME from "../../assets/fotoperfil.jpg";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <section className="section-about" id="about">

      <h5>Conoce</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about her self" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Soy estudiante del segundo año de la carrera de Analista
            Programador. Mi último trabajo fue como desarrollador web donde
            trabajé con React Js-Ts y otras tecnologías como Google Firebase.
            <br />
            Además aprendí Java, C++ y PHP pero no son mi fuerte.
            <br />
            Estoy en un momento en el que me siento capacitado para buscar
            desafíos en el ámbito profesional para seguir mejorando y
            especializándome en un área en concreto para lograr aportar algo
            constructivo en los proyectos en los que me involucre.
          </p>
          <AboutCards />
          <a href="#contact" className="btn btn-primary" style={
            {
              display: "block",
              width: "100%",
              marginTop: "1rem",
              textAlign: "center",
            }
          }>
            Contactame!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
