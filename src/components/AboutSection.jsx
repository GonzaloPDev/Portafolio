import React from "react";

export default function AboutSection({ onNavigate }) {
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate("CONTACTO");
    }
  };

  return (
    <div className="about-section">

      <div className="about-block">
        <span className="about-subheading">Sobre mí</span>
        <p className="about-text">
          Soy estudiante de 4° año de <span className="about-highlight">Ingeniería en Sistemas</span> en La Plata. Me enfoco en el
          análisis, diseño y estructuración de soluciones que puedan implementarse y
          utilizarse en contextos reales.
        </p>
      </div>

      <div className="about-block">
        <span className="about-subheading">Proyectos</span>
        <p className="about-text">
          Con el objetivo de ganar experiencia y ver soluciones funcionando en
          producción, decidí buscar proyectos que respondieran a problemáticas reales.
        </p>
        <p className="about-text">
          Así nació <span className="about-highlight">XtremeGym</span> — una app mobile para gestión integral de un gimnasio real —
          y <span className="about-highlight">PAICAT</span> — sistema web para digitalizar el ingreso universitario de la UTN.
        </p>
      </div>

      <div className="about-block">
        <span className="about-subheading">Stack técnico</span>
        <p className="about-text">
          Trabajo principalmente con <span className="about-highlight">React, React Native, Django y Node.js</span>,
          con especial atención al diseño del sistema, reglas de negocio, organización del código y escalabilidad.
        </p>
      </div>

      <div className="about-cta">
        <span className="about-cta-text">¿Buscás un developer?</span>
        <button className="about-cta-button" onClick={handleContactClick}>
          Hablemos →
        </button>
      </div>

    </div>
  );
}