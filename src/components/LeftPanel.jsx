import React from "react";
import { navItems, socialLinks } from "../data/data.jsx";
import profilePic from "../media/Perfil.png";

export default function LeftPanel({ activeNav, setActiveNav }) {
  return (
    <aside className="left-panel">
      <div className="left-content">
        <div>
          <div className="profile-avatar-wrapper">
            <img
              src={profilePic}
              alt="Gonzalo Perez"
              className="profile-avatar"
              fetchpriority="high"
              loading="eager"
              width="150"
              height="150"
              decoding="sync"
            />
          </div>
          <h1 className="name">Gonzalo Perez</h1>
          <h2 className="role">Jr. Full Stack Developer</h2>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeNav === item ? "nav-active" : ""}`}
              onClick={() => setActiveNav(item)}
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
}