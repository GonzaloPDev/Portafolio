import React, { memo, useCallback } from "react";
import { navItems, socialLinks } from "../data/data.jsx";
import profilePic from "../media/Perfil.webp";

const LeftPanel = memo(function LeftPanel({ activeNav, setActiveNav }) {
  const handleNavClick = useCallback((item) => {
    setActiveNav(item);
  }, [setActiveNav]);
  return (
    <aside className="left-panel">
      <div className="left-content">
        <div>
          <div className="profile-avatar-wrapper">
            <img
              src={profilePic}
              alt="Gonzalo Perez"
              className="profile-avatar"
              fetchPriority="high"
              loading="eager"
              width="150"
              height="150"
              decoding="sync"
            />
          </div>
          <h1 className="name">Gonzalo Perez</h1>
          <span className="role">Full Stack Developer</span>
          <span className="role-sub">Business Analytic</span>
          <div className="available-badge">Disponible para trabajar</div>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeNav === item ? "nav-active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              <span className="nav-line" />
              {item}
            </button>
          ))}
        </nav>

        <div className="socials">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              className="social-link"
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
});

export default LeftPanel;