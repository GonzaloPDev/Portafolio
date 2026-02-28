import React, { useState } from "react";
import AboutSection from "./AboutSection";
import TechSection from "./TechSection";
import ContactSection from "./ContactSection";
import SectionCard from "./SectionCard";
import ProjectModal from "./ProjectModal";
import { navItems, socialLinks, projects } from "../data/data.jsx";
import profilePic from "../media/Perfil.png";

const SECTIONS = [
  { key: "ABOUT",       label: "About" },
  { key: "TECNOLOGÍAS", label: "Tecnologías" },
  { key: "PROYECTOS",   label: "Proyectos" },
  { key: "CONTACTO",    label: "Contacto" },
];

export default function MobileLanding() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [originRect, setOriginRect]           = useState(null);

  const handleProjectClick = (project, rect) => {
    setOriginRect(rect);
    setSelectedProject(project);
  };

  const renderSection = (key) => {
    switch (key) {
      case "ABOUT":       return <AboutSection />;
      case "TECNOLOGÍAS": return <TechSection />;
      case "CONTACTO":    return <ContactSection />;
      case "PROYECTOS":
        return (
          <div className="exp-list">
            {projects.map((item, i) => (
              <SectionCard
                key={`project-${i}`}
                item={item}
                active={false}
                index={i}
                phase="idle"
                onClick={handleProjectClick}
              />
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="mobile-landing">

      {/* ── HEADER ── */}
      <header className="mobile-header">
        <div className="mobile-avatar-wrapper">
          <img
            src={profilePic}
            alt="Gonzalo Perez"
            className="mobile-avatar"
            fetchpriority="high"
            loading="eager"
            width="100"
            height="100"
            decoding="sync"
          />
        </div>
        <h1 className="name">Gonzalo Perez</h1>
        <h2 className="role">Jr. Full Stack Developer</h2>

        <div className="socials mobile-socials">
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
      </header>

      {/* ── SECCIONES ── */}
      <main className="mobile-main">
        {SECTIONS.map(({ key, label }) => (
          <section key={key} className="mobile-section">
            <h3 className="mobile-section-title">{label}</h3>
            {renderSection(key)}
          </section>
        ))}
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          originRect={originRect}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}