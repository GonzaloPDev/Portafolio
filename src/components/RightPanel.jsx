import React, { useRef, useEffect, useState } from "react";
import SectionCard from "./SectionCard";
import { experiences, aboutItems, projects } from "../data/data.jsx";

const sectionData = {
  ABOUT: aboutItems,
  EXPERIENCE: experiences,
  PROJECTS: projects,
};

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
    const keys = Object.keys(sectionData);
    const currentIndex = keys.indexOf(activeNav);
    if (currentIndex < keys.length - 1) {
      setActiveNav(keys[currentIndex + 1]);
    }
  };

  const items = sectionData[visibleSection] || [];

  return (
    <main className="right-panel" ref={scrollRef} onScroll={handleScroll}>
      <div className="exp-list">
        {items.map((item, i) => (
          <SectionCard
            key={`${visibleSection}-${i}`}
            item={item}
            active={i === 0}
            index={i}
            phase={phase}
          />
        ))}
      </div>
    </main>
  );
}