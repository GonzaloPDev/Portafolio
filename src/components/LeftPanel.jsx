import React from "react";
import { navItems, socialLinks } from "../data/data.jsx";

export default function LeftPanel({ activeNav, setActiveNav }) {
  return (
    <aside className="left-panel">
      <div className="left-content">
        <div>
          <h1 className="name">Gonzalo Perez</h1>
          <h2 className="role">Full Stack Developer</h2>
          <p className="bio">
            Estudiante avanzado de Ingeniería en Sistemas en UTN. Diseño y
            construyo soluciones digitales reales, con foco en arquitectura
            limpia, análisis funcional y código escalable.
          </p>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeNav === item ? "nav-active" : ""}`}
              onClick={() => setActiveNav(item)}
            >
              <span className="nav-line" />
              {item}
            </button>
          ))}
        </nav>

        <div className="socials">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              className="social-link"
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}