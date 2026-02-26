import React from "react";

export const experiences = [
  {
    period: "SEPT 2025 — ACTUALIDAD",
    title: "Full Stack Developer",
    company: "XtremeGym",
    subtitle: "Freelance · Santa Teresita, Buenos Aires",
    description:
      "Desarrollo end-to-end de una solución digital para un cliente real. Trabajé directamente con el cliente en el relevamiento de requerimientos y redefinición de procesos internos. La solución permite gestionar socios, membresías, pagos y asistencias, con integración a MercadoPago, generación de comprobantes PDF, notificaciones push y comunicación en tiempo real via WebSockets.",
    tags: ["React Native", "Expo", "Node.js", "WebSockets", "MercadoPago"],
  },
  {
    period: "JUN 2025 — ACTUALIDAD",
    title: "Desarrollador Backend",
    company: "PAICAT — UTN FRLP",
    subtitle: "Proyecto académico · La Plata, Buenos Aires",
    description:
      "Plataforma web para la gestión integral del curso de ingreso universitario de la UTN FRLP. Implementé el módulo de Asistencias con validación automática de porcentajes mínimos. El sistema contempla roles (Administrador, Coordinador, Docente, Alumno), reportes en PDF/Excel e integración con bases de datos académicas externas. Entorno contenerizado con Docker y Docker Compose.",
    tags: ["Laravel", "PHP", "Docker", "MariaDB", "Nginx"],
  },
  {
    period: "ABR 2025 — JUL 2025",
    title: "Desarrollador Backend",
    company: "Gestión de Entradas — UTN FRLP",
    subtitle: "Proyecto académico · La Plata, Buenos Aires",
    description:
      "Aplicación web para gestión y venta de entradas con Django. Trabajé con flujo colaborativo en Git, pull requests y revisiones de código. Implementé pruebas unitarias, de integración y E2E con Playwright, integración de Ruff y pipeline CI/CD con GitHub Actions.",
    tags: ["Django", "Python", "Docker", "Playwright", "GitHub Actions", "CI/CD"],
  },
];

export const navItems = ["ABOUT", "EXPERIENCE", "PROJECTS"];

export const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/GonzaloPDev",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gonzalo-perez-dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];