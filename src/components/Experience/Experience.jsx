import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiBootstrap, SiPlatzi, SiJavascript } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact, FaAngular } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experiencia y tecnologias</h2>

      <div className="container experience__container">
        <div className="experience__tecnologies">
          <h3>Tecnologias</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-lights">Alto</small>
              </div>
            </article>

            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-lights">Medio</small>
              </div>
            </article>

            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-lights">Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <DiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-lights">Medio</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-lights">Medio</small>
              </div>
            </article>
            <article className="experience__details">
              <FaAngular className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-lights">Medio</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__certifications">
          <h3>Certificaciones</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPlatzi className="experience__details-icon" />
              <div>
                <h4>HTML y CSS avanzado</h4>
                <small className="text-lights">Institucion: Platzi.com</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-lights">Institucion: SoyHenry</small>
              </div>
            </article>

            <article className="experience__details">
              <SiPlatzi className="experience__details-icon" />
              <div>
                <h4>ECMAScript 6+</h4>
                <small className="text-lights">Institucion: Platzi.com</small>
              </div>
            </article>

            <article className="experience__details">
              <SiPlatzi className="experience__details-icon" />
              <div>
                <h4>Introduccion a ReactJs</h4>
                <small className="text-lights">Institucion: Platzi.com</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
