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
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const el = sectionRefs.current[activeNav];
    if (!el || !scrollRef.current) return;
    const currentIndex = NAV_KEYS.indexOf(activeNav);
    const lastIndex = NAV_KEYS.indexOf(lastNav.current);
    const goingDown = currentIndex >= lastIndex;
    isScrollingTo.current = true;
    el.scrollIntoView({ behavior: "smooth", block: goingDown ? "start" : "end" });
    lastNav.current = activeNav;
    setTimeout(() => { isScrollingTo.current = false; }, 800);
  }, [activeNav]);

  const detectSection = useCallback(() => {
    if (isScrollingTo.current) return;
    const container = scrollRef.current;
    if (!container) return;

    const containerTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    const threshold = containerHeight * 0.5;

    let currentSection = NAV_KEYS[0];
    let maxOverlap = 0;

    NAV_KEYS.forEach((key) => {
      const el = sectionRefs.current[key];
      if (!el) return;

      const sectionTop = el.offsetTop - container.offsetTop;
      const sectionHeight = el.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      const visibleTop = Math.max(0, containerTop - sectionTop);
      const visibleBottom = Math.min(sectionHeight, (containerTop + containerHeight) - sectionTop);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      const overlap = visibleHeight;

      if (overlap > maxOverlap) {
        maxOverlap = overlap;
        currentSection = key;
      }
    });

    if (currentSection !== lastNav.current) {
      lastNav.current = currentSection;
      setActiveNav(currentSection);
    }
  }, [setActiveNav]);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      cancelAnimationFrame(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = requestAnimationFrame(detectSection);
  }, [detectSection]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleProjectClick = (project, rect) => {
    setOriginRect(rect);
    setSelectedProject(project);
  };

  return (
    <main className="right-panel" ref={scrollRef}>

      <section className="right-section" data-section="ABOUT"
        ref={(el) => (sectionRefs.current["ABOUT"] = el)}>
        <AboutSection onNavigate={setActiveNav} />
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