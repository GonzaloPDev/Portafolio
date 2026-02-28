import React, { useRef } from "react";

export default function SectionCard({ item, active, index, phase, onClick }) {
  const cardRef = useRef(null);
  const delay = `${index * 80}ms`;

  const handleClick = () => {
    if (!onClick) return;
    const rect = cardRef.current?.getBoundingClientRect();
    onClick(item, rect);
  };

  const tags = item.mainTags || item.tags || [];

  return (
    <div
      ref={cardRef}
      className={`exp-card ${active ? "active" : ""} card-${phase}`}
      style={{ animationDelay: delay, transitionDelay: delay }}
      onClick={handleClick}
    >
      <div className="exp-period-col">
        <span className="exp-year">{item.year || item.period}</span>
        {item.current && <span className="exp-current">Actualidad</span>}
      </div>
      <div className="exp-content">
        <h3 className="exp-title">
          {item.title}
          {item.company && <> · <span>{item.company}</span></>}
          <span className="exp-arrow">↗</span>
        </h3>
        <p className="exp-description">{item.intro || item.description}</p>
        <div className="exp-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}