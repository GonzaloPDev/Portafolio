import React from "react";

export default function AboutSection() {
  return (
    <div className="about-section">

      <div className="about-block">
        <span className="about-subheading">Sobre mí</span>
        <p className="about-text">
          Soy estudiante de 4° año de Ingeniería en Sistemas en La Plata. Me enfoco en el
          análisis, diseño y estructuración de soluciones que puedan implementarse y
          utilizarse en contextos reales.
        </p>
      </div>

      <div className="about-block">
        <span className="about-subheading">Por qué proyectos propios</span>
        <p className="about-text">
          Con el objetivo de ganar experiencia y ver soluciones mías funcionando en
          producción, decidí buscar proyectos que respondieran a problemáticas reales y
          comprender así el ciclo entero de un software: desde la necesidad hasta la
          implementación.
        </p>
        <p className="about-text">
          Así surgió el desarrollo de una{" "}
          <span className="about-highlight">aplicación mobile para la gestión integral de un gimnasio</span>{" "}
          —administración de alumnos, finanzas, planes y profesores— y un{" "}
          <span className="about-highlight">sistema web para digitalizar el ingreso universitario</span>.
        </p>
      </div>

      <div className="about-block">
        <span className="about-subheading">Stack & enfoque técnico</span>
        <p className="about-text">
          Trabajo principalmente con <span className="about-highlight">Django, React y Node.js</span>,
          prestando especial atención al diseño del sistema, la definición de reglas de
          negocio, la organización del código y la escalabilidad.
        </p>
      </div>

      <div className="about-block">
        <span className="about-subheading">Perfil & búsqueda</span>
        <p className="about-text">
          Me considero una persona con facilidad para la comunicación y el trabajo en
          equipo, y busco desarrollarme en entornos donde pueda fortalecer estas
          capacidades combinando lo técnico con el análisis funcional y la interacción
          profesional.
        </p>
        <p className="about-text">
          Actualmente me encuentro en búsqueda de mi{" "}
          <span className="about-highlight">primera experiencia formal</span> en roles
          orientados a análisis funcional, backend o full stack, donde pueda
          involucrarme tanto en la comprensión del problema como en la implementación de
          la solución.
        </p>
      </div>

    </div>
  );
}