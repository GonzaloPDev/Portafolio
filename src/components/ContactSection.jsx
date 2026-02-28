import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2 className="about-heading">Hablemos</h2>
        <p className="about-text">
          Estoy abierto a oportunidades de trabajo, colaboraciones o simplemente intercambiar ideas.
          No dudes en escribirme.
        </p>

        <div className="contact-links">
          <a href="mailto:gonzalo@email.com" className="contact-link">
            <span className="contact-icon">✉</span>
            <span>gonzalo@email.com</span>
          </a>
          <a href="https://linkedin.com/in/gonzalo-perez-dev" target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-icon">in</span>
            <span>linkedin.com/in/gonzalo-perez-dev</span>
          </a>
          <a href="https://github.com/GonzaloPDev" target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-icon">⌥</span>
            <span>github.com/GonzaloPDev</span>
          </a>
          <div className="contact-link contact-location">
            <span className="contact-icon">◎</span>
            <span>La Plata, Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h3 className="about-subheading">Dejame un mensaje</h3>
        {sent ? (
          <div className="contact-success">
            ✓ Mensaje enviado, te respondo a la brevedad.
          </div>
        ) : (
          <div className="form-fields">
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Tu email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              className="form-input form-textarea"
              name="message"
              placeholder="Tu mensaje..."
              value={form.message}
              onChange={handleChange}
              rows={5}
            />
            <button className="form-btn" onClick={handleSubmit}>
              Enviar mensaje
            </button>
          </div>
        )}
      </div>
    </div>
  );
}