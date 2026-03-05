import React, { useEffect, useState } from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

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
        expandedImg !== null ? setExpandedImg(null) : handleClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expandedImg]);

  const originX = originRect ? `${originRect.left + originRect.width / 2}px` : "50%";
  const originY = originRect ? `${originRect.top + originRect.height / 2}px` : "50%";
  const images = project.images || [];
  const repoUrls = project.repoUrls || [];

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

            {/* REPOS */}
            {repoUrls.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">Repositorios</h3>
                <div className="modal-repos">
                  {repoUrls.map((repo) => (
                    <a
                      key={repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-repo-btn"
                    >
                      <GitHubIcon />
                      <span>{repo.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* IMÁGENES */}
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
        <div className="img-expanded-backdrop" onClick={() => setExpandedImg(null)}>
          <img
            src={images[expandedImg]}
            alt="Expanded"
            className="img-expanded"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="img-expanded-close" onClick={() => setExpandedImg(null)}>✕</button>
          {images.length > 1 && (
            <>
              <button className="img-nav img-nav-prev"
                onClick={(e) => { e.stopPropagation(); setExpandedImg((expandedImg - 1 + images.length) % images.length); }}>‹</button>
              <button className="img-nav img-nav-next"
                onClick={(e) => { e.stopPropagation(); setExpandedImg((expandedImg + 1) % images.length); }}>›</button>
            </>
          )}
        </div>
      )}
    </>
  );
}