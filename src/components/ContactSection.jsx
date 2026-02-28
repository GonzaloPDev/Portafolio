import React from "react";

const contacts = [
  {
    icon: "✉",
    label: "gonzalo.asplanato@gmail.com",
    href: "mailto:gonzalo.asplanato@gmail.com",
  },
  {
    icon: "in",
    label: "linkedin.com/in/gonzalo-perez-4b94783b3",
    href: "https://www.linkedin.com/in/gonzalo-perez-4b94783b3",
    external: true,
  },
  {
    icon: "⌥",
    label: "github.com/GonzaloPDev",
    href: "https://github.com/GonzaloPDev",
    external: true,
  },
  {
    icon: "◎",
    label: "La Plata, Buenos Aires, Argentina",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2 className="about-heading">Hablemos</h2>
        <p className="about-text">
          Estoy en búsqueda de mi primera experiencia formal. Si tenés una
          oportunidad, una consulta o simplemente querés conectar, escribime.
        </p>
      </div>

      <div className="contact-links">
        {contacts.map(({ icon, label, href, external }) =>
          href ? (
            <a
              key={label}
              href={href}
              className="contact-link"
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="contact-icon">{icon}</span>
              <span>{label}</span>
            </a>
          ) : (
            <div key={label} className="contact-link contact-location">
              <span className="contact-icon">{icon}</span>
              <span>{label}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}