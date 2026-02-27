import React from "react";

export default function SectionCard({ item, active, index, phase }) {
  const delay = `${index * 80}ms`;

  return (
    <div
      className={`exp-card ${active ? "active" : ""} card-${phase}`}
      style={{ animationDelay: delay, transitionDelay: delay }}
    >
      <div className="exp-period">{item.period || ""}</div>
      <div className="exp-content">
        <h3 className="exp-title">
          {item.title}
          {item.company && <> · <span>{item.company}</span></>}
          <span className="exp-arrow">↗</span>
        </h3>
        {item.subtitle && <p className="exp-subtitle">{item.subtitle}</p>}
        <p className="exp-description">{item.description}</p>
        <div className="exp-tags">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}