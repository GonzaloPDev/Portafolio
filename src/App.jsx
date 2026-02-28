import React, { useState } from "react";
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
import MouseGlow from "./components/MouseGlow";
import GridBackground from "./components/GridBackground";

export default function App() {
  const [activeNav, setActiveNav] = useState("ABOUT");

  return (
    <div className="portfolio">
      <GridBackground />
      <MouseGlow />
      <LeftPanel activeNav={activeNav} setActiveNav={setActiveNav} />
      <RightPanel activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  );
}