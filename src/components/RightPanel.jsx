import React, { useRef, useEffect, useState, useCallback } from "react";
import SectionCard from "./SectionCard";
import AboutSection from "./AboutSection";
import TechSection from "./TechSection";
import ContactSection from "./ContactSection";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/data.jsx";

const NAV_KEYS = ["ABOUT", "TECNOLOGÍAS", "PROYECTOS", "CONTACTO"];

export default function RightPanel({ activeNav, setActiveNav }) {
  const scrollRef = useRef(null);
  const [visibleSection, setVisibleSection] = useState(activeNav);
  const [phase, setPhase] = useState("idle");
  const [selectedProject, setSelectedProject] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const [atBottom, setAtBottom] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const prevNav = useRef(activeNav);

  useEffect(() => {
    if (activeNav === prevNav.current) return;
    prevNav.current = activeNav;
    setSelectedProject(null);
    setPhase("glitch-out");

    const swapTimeout = setTimeout(() => {
      setVisibleSection(activeNav);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      setAtTop(true);
      setAtBottom(false);
      setPhase("glitch-in");
    }, 320);

    const doneTimeout = setTimeout(() => setPhase("idle"), 900);

    return () => {
      clearTimeout(swapTimeout);
      clearTimeout(doneTimeout);
    };
  }, [activeNav]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;

    setAtTop(scrollTop < 80);
    setAtBottom(scrollHeight - scrollTop - clientHeight < 50);
  }, []);

  // Chequear posición inicial cuando cambia la sección
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;
    // Si el contenido no scrollea, mostrar ambos botones según corresponda
    if (scrollHeight <= clientHeight + 10) {
      setAtTop(true);
      setAtBottom(true);
    }
  }, [visibleSection]);

  const goNext = () => {
    const i = NAV_KEYS.indexOf(activeNav);
    if (i < NAV_KEYS.length - 1) setActiveNav(NAV_KEYS[i + 1]);
  };

  const goPrev = () => {
    const i = NAV_KEYS.indexOf(activeNav);
    if (i > 0) setActiveNav(NAV_KEYS[i - 1]);
  };

  const currentIndex = NAV_KEYS.indexOf(activeNav);
  const showUp = currentIndex > 0 && atTop;
  const showDown = currentIndex < NAV_KEYS.length - 1 && atBottom;

  const handleProjectClick = (project, rect) => {
    setOriginRect(rect);
    setSelectedProject(project);
  };

  const renderSection = () => {
    switch (visibleSection) {
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
                phase={phase}
                onClick={(p, rect) => handleProjectClick(p, rect)}
              />
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <main className="right-panel" ref={scrollRef} onScroll={handleScroll}>
      <div className={`section-wrapper card-${phase}`}>
        {renderSection()}
      </div>

      {/* Flecha arriba — siempre renderizada, visibilidad por CSS */}
      <button
        className={`panel-nav panel-nav-up ${showUp ? "panel-nav-visible" : ""}`}
        onClick={goPrev}
      >
        <span className="panel-nav-arrow">↑</span>
        <span className="panel-nav-label">{NAV_KEYS[currentIndex - 1] || ""}</span>
      </button>

      {/* Flecha abajo — siempre renderizada, visibilidad por CSS */}
      <button
        className={`panel-nav panel-nav-down ${showDown ? "panel-nav-visible" : ""}`}
        onClick={goNext}
      >
        <span className="panel-nav-label">{NAV_KEYS[currentIndex + 1] || ""}</span>
        <span className="panel-nav-arrow">↓</span>
      </button>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          originRect={originRect}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}