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
            </div>
          </div>

          {/* BODY */}
          <div className="modal-body">

            <div className="modal-section">
              <h3 className="modal-section-title">Descripción</h3>
              <p className="modal-text">{project.description}</p>
            </div>

            {/* TAGS */}
            <div className="modal-section">
              <h3 className="modal-section-title">Tecnologías</h3>
              <div className="modal-body-tags">
                {(project.allTags || project.tags || []).map((tag) => (
                  <span key={tag} className="tag" style={{ flexShrink: 0 }}>{tag}</span>
                ))}
              </div>
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

            {project.storeUrl && (
              <div className="modal-section">
                <h3 className="modal-section-title">Disponible en</h3>
                <a
                  href={project.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="store-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="store-btn-icon">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l12.1-12.1-3.37-3.37L3.18 23.76zM20.5 10.56l-2.56-1.47-3.79 3.79 3.79 3.79 2.59-1.49c.74-.43.74-1.19-.03-1.62zM1.03.57C.77.88.62 1.35.62 1.97v20.06c0 .62.15 1.09.41 1.4l.08.07 11.23-11.23v-.27L1.11.5l-.08.07zM13.65 8.28l-3.82-3.82L1.72.58c-.29-.17-.58-.21-.86-.13l12.12 12.12 .67-.67z"/>
                  </svg>
                  <div className="store-btn-text">
                    <span className="store-btn-sub">Disponible en</span>
                    <span className="store-btn-main">Google Play</span>
                  </div>
                </a>
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