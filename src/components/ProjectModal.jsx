import React, { useEffect, useState } from "react";

export default function ProjectModal({ project, originRect, onClose }) {
  if (!project) return null;

  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 320);
  };

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const originX = originRect ? `${originRect.left + originRect.width / 2}px` : "50%";
  const originY = originRect ? `${originRect.top + originRect.height / 2}px` : "50%";

  return (
    <div
      className={`modal-backdrop ${closing ? "modal-backdrop-out" : ""}`}
      onClick={handleClose}
      style={{ "--origin-x": originX, "--origin-y": originY }}
    >
      <div
        className={`modal-card ${closing ? "modal-card-out" : "modal-card-in"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER con info izquierda y tags derecha */}
        <div className="modal-header">
          <button className="modal-close" onClick={handleClose}>✕</button>

          <div className="modal-header-inner">
            <div className="modal-header-left">
              <span className="modal-period">{project.period}</span>
              <h2 className="modal-title">{project.title}</h2>
              <span className="modal-company">{project.company}</span>
            </div>

            <div className="modal-header-right">
              <span className="modal-tags-label">Tecnologías</span>
              <div className="modal-header-tags">
                {(project.allTags || project.tags).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="modal-body">
          <div className="modal-section">
            <h3 className="modal-section-title">Descripción</h3>
            <p className="modal-text">{project.description}</p>
          </div>

          {project.details && (
            <div className="modal-section">
              <h3 className="modal-section-title">Detalles técnicos</h3>
              <ul className="modal-list">
                {project.details.map((d, i) => (
                  <li key={i} className="modal-list-item">{d}</li>
                ))}
              </ul>
            </div>
          )}

          {project.role && (
            <div className="modal-section">
              <h3 className="modal-section-title">Mi rol</h3>
              <p className="modal-text">{project.role}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}