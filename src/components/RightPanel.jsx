import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/data";

export default function RightPanel() {
  return (
    <main className="right-panel">
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} active={i === 0} />
        ))}
      </div>
    </main>
  );
}