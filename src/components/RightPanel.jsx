import React, { useRef, useEffect, useState, useCallback } from "react";
import AboutSection from "./AboutSection";
import TechSection from "./TechSection";
import ContactSection from "./ContactSection";
import SectionCard from "./SectionCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/data.jsx";

const NAV_KEYS = ["ABOUT", "TECNOLOGÍAS", "PROYECTOS", "CONTACTO"];

export default function RightPanel({ activeNav, setActiveNav }) {
  const scrollRef = useRef(null);
  const sectionRefs = useRef({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const isScrollingTo = useRef(false);
  const lastNav = useRef(activeNav);

  useEffect(() => {
    const el = sectionRefs.current[activeNav];
    if (!el || !scrollRef.current) return;
    const currentIndex = NAV_KEYS.indexOf(activeNav);
    const lastIndex = NAV_KEYS.indexOf(lastNav.current);
    const goingDown = currentIndex >= lastIndex;
    isScrollingTo.current = true;
    el.scrollIntoView({ behavior: "smooth", block: goingDown ? "start" : "end" });
    lastNav.current = activeNav;
    setTimeout(() => { isScrollingTo.current = false; }, 1000);
  }, [activeNav]);

  const handleScroll = useCallback(() => {
    if (isScrollingTo.current) return;
    const container = scrollRef.current;
    if (!container) return;
    const scrollMid = container.scrollTop + container.clientHeight * 0.4;
    let current = NAV_KEYS[0];
    NAV_KEYS.forEach((key) => {
      const el = sectionRefs.current[key];
      if (el && el.offsetTop <= scrollMid) current = key;
    });
    if (current !== lastNav.current) {
      lastNav.current = current;
      setActiveNav(current);
    }
  }, [setActiveNav]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleProjectClick = (project, rect) => {
    setOriginRect(rect);
    setSelectedProject(project);
  };

  return (
    <main className="right-panel" ref={scrollRef}>

      <section className="right-section" data-section="ABOUT"
        ref={(el) => (sectionRefs.current["ABOUT"] = el)}>
        <AboutSection />
      </section>

      <div className="section-divider" />

      <section className="right-section" data-section="TECNOLOGÍAS"
        ref={(el) => (sectionRefs.current["TECNOLOGÍAS"] = el)}>
        <TechSection />
      </section>

      <div className="section-divider" />

      <section className="right-section" data-section="PROYECTOS"
        ref={(el) => (sectionRefs.current["PROYECTOS"] = el)}>
        <div className="exp-list">
          {projects.map((item, i) => (
            <SectionCard
              key={`project-${i}`}
              item={item}
              active={false}
              index={i}
              onClick={(p, rect) => handleProjectClick(p, rect)}
            />
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="right-section" data-section="CONTACTO"
        ref={(el) => (sectionRefs.current["CONTACTO"] = el)}>
        <ContactSection />
      </section>

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