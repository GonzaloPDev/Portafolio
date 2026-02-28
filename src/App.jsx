import React, { useState, useEffect } from "react";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/leftpanel.css";
import "./styles/cards.css";
import "./styles/about.css";
import "./styles/tech.css";
import "./styles/contact.css";
import "./styles/modal.css";
import "./styles/animations.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import MobileLanding from "./components/MobileLanding";
import MouseGlow from "./components/MouseGlow";
import GridBackground from "./components/GridBackground";

export default function App() {
  const [activeNav, setActiveNav] = useState("ABOUT");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <>
        <GridBackground />
        <MouseGlow />
        <MobileLanding />
      </>
    );
  }

  return (
    <div className="portfolio">
      <GridBackground />
      <MouseGlow />
      <LeftPanel activeNav={activeNav} setActiveNav={setActiveNav} />
      <RightPanel activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  );
}