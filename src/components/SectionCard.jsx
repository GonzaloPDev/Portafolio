import React, { useRef, memo } from "react";

const SectionCard = memo(function SectionCard({ item, active, index, phase, onClick }) {
  const cardRef = useRef(null);
  const delay = `${index * 100}ms`;

  const handleClick = () => {
    if (!onClick) return;
    const rect = cardRef.current?.getBoundingClientRect();
    onClick(item, rect);
  };

  const tags = item.mainTags || item.tags || [];
  const tagCategories = item.tagCategories || [];

  return (
    <div
      ref={cardRef}
      className={`exp-card ${active ? "active" : ""} card-${phase}`}
      style={{ animationDelay: delay, transitionDelay: delay }}
      onClick={handleClick}
    >
      {item.thumbnail && (
        <img src={item.thumbnail} alt={item.title} className="exp-thumb" />
      )}
      <div className="exp-content">
        <div className="exp-period-col">
          <span className="exp-year">{item.year || item.period}</span>
          {item.current && <span className="exp-current">Actualidad</span>}
        </div>
        <h3 className="exp-title">
          <span className="exp-title-main">
            {item.title}
            {item.company && <span className="exp-subtitle"> · {item.company}</span>}
            <span className="exp-arrow">↗</span>
          </span>
        </h3>
        <p className="exp-description">{item.intro || item.description}</p>
        <div className="exp-tags">
          {tags.map((tag, i) => (
            <span key={tag} className={`tag ${tagCategories[i] || ''}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default SectionCard;