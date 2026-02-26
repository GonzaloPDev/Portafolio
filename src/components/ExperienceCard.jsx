import React from "react";

export default function ExperienceCard({ exp, active }) {
  return (
    <div className={`exp-card ${active ? "active" : ""}`}>
      <div className="exp-period">{exp.period}</div>
      <div className="exp-content">
        <h3 className="exp-title">
          {exp.title} · {exp.company}
          <span className="exp-arrow">↗</span>
        </h3>
        {exp.subtitle && <p className="exp-subtitle">{exp.subtitle}</p>}
        <p className="exp-description">{exp.description}</p>
        <div className="exp-tags">
          {exp.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}