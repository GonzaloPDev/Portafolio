import React, { useRef, useEffect, useState } from "react";
import SectionCard from "./SectionCard";
import AboutSection from "./AboutSection";
import TechSection from "./TechSection";
import ContactSection from "./ContactSection";
import { projects } from "../data/data.jsx";

const NAV_KEYS = ["ABOUT", "TECNOLOGÍAS", "PROYECTOS", "CONTACTO"];

export default function RightPanel({ activeNav, setActiveNav }) {
  const scrollRef = useRef(null);
  const [visibleSection, setVisibleSection] = useState(activeNav);
  const [phase, setPhase] = useState("idle");
  const prevNav = useRef(activeNav);

  useEffect(() => {
    if (activeNav === prevNav.current) return;
    prevNav.current = activeNav;

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

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    if (!atBottom) return;
    const currentIndex = NAV_KEYS.indexOf(activeNav);
    if (currentIndex < NAV_KEYS.length - 1) {
      setActiveNav(NAV_KEYS[currentIndex + 1]);
    }
  };

  const renderSection = () => {
    switch (visibleSection) {
      case "ABOUT":
        return <AboutSection />;
      case "TECNOLOGÍAS":
        return <TechSection />;
      case "PROYECTOS":
        return (
          <div className="exp-list">
            {projects.map((item, i) => (
              <SectionCard
                key={`project-${i}`}
                item={item}
                active={i === 0}
                index={i}
                phase={phase}
              />
            ))}
          </div>
        );
      case "CONTACTO":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <main className="right-panel" ref={scrollRef} onScroll={handleScroll}>
      <div className={`section-wrapper card-${phase}`}>
        {renderSection()}
      </div>
    </main>
  );
}