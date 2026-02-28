import React, { useEffect, useState } from "react";

export default function ProjectModal({ project, originRect, onClose }) {
  if (!project) return null;

  const [closing, setClosing] = useState(false);
  const [expandedImg, setExpandedImg] = useState(null);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 320);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (expandedImg !== null) {
          setExpandedImg(null);
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expandedImg]);

  const originX = originRect ? `${originRect.left + originRect.width / 2}px` : "50%";
  const originY = originRect ? `${originRect.top + originRect.height / 2}px` : "50%";
  const images = project.images || [];

  return (
    <>
      <div
        className={`modal-backdrop ${closing ? "modal-backdrop-out" : ""}`}
        onClick={expandedImg !== null ? () => setExpandedImg(null) : handleClose}
        style={{ "--origin-x": originX, "--origin-y": originY }}
      >
        <div
          className={`modal-card ${closing ? "modal-card-out" : "modal-card-in"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
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
                  {(project.allTags || project.tags || []).map((tag) => (
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

            {/* IMÁGENES AL FINAL */}
            {images.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">Capturas</h3>
                <div className="modal-thumbs">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Captura ${i + 1}`}
                      className="modal-thumb"
                      onClick={(e) => { e.stopPropagation(); setExpandedImg(i); }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* IMAGEN EXPANDIDA */}
      {expandedImg !== null && (
        <div
          className="img-expanded-backdrop"
          onClick={() => setExpandedImg(null)}
        >
          <img
            src={images[expandedImg]}
            alt="Expanded"
            className="img-expanded"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="img-expanded-close" onClick={() => setExpandedImg(null)}>✕</button>
          {images.length > 1 && (
            <>
              <button
                className="img-nav img-nav-prev"
                onClick={(e) => { e.stopPropagation(); setExpandedImg((expandedImg - 1 + images.length) % images.length); }}
              >‹</button>
              <button
                className="img-nav img-nav-next"
                onClick={(e) => { e.stopPropagation(); setExpandedImg((expandedImg + 1) % images.length); }}
              >›</button>
            </>
          )}
        </div>
      )}
    </>
  );
}