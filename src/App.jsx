import React, { useState } from "react";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function App() {
  const [activeNav, setActiveNav] = useState("EXPERIENCE");

  return (
    <div className="portfolio">
      <LeftPanel activeNav={activeNav} setActiveNav={setActiveNav} />
      <RightPanel />
    </div>
  );
}