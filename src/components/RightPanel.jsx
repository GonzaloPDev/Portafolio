import React, { useRef, useEffect, useState } from "react";
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
  const prevNav = useRef(activeNav);

  useEffect(() => {
    if (activeNav === prevNav.current) return;
    prevNav.current = activeNav;
    setSelectedProject(null);
    setPhase("glitch-out");

    const swapTimeout = setTimeout(() => {
      setVisibleSection(activeNav);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      setPhase("glitch-in");
    }, 320);

    const doneTimeout = setTimeout(() => {
      setPhase("idle");
    }, 900);

    return () => {
      clearTimeout(swapTimeout);
      clearTimeout(doneTimeout);
    };
  }, [activeNav]);

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
    <main className="right-panel" ref={scrollRef}>
      <div className={`section-wrapper card-${phase}`}>
        {renderSection()}
      </div>

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