import React from "react";

export const projects = [
  {
    year: "2025",
    current: true,
    period: "Actualidad",
    title: "App de Gestión — XtremeGym",
    company: "Freelance · Santa Teresita, Buenos Aires",
    intro: "Desarrollo end-to-end de una solución digital para un gimnasio real, actualmente en etapa final previa a producción.",
    description:
      "Junto a un compañero de equipo, desarrollamos una solución digital integral para XtremeGym, gimnasio ubicado en Santa Teresita. Trabajamos directamente con el cliente en el relevamiento de requerimientos, análisis del problema y redefinición de procesos internos, transformando una gestión manual en un sistema digital que será utilizado en la operación diaria del negocio.",
    details: [
      "Gestión de socios, membresías, pagos y administración general",
      "Integración con MercadoPago para cobros digitales",
      "Generación automática de comprobantes en PDF",
      "Notificaciones push para recordatorios y vencimientos",
      "Comunicación en tiempo real mediante WebSockets",
      "Almacenamiento de archivos en la nube",
      "Registro y control de asistencias diarias",
    ],
    images: [
      "/src/media/XtremeGymCapturas/gymscreenshot.webp",
      "/src/media/XtremeGymCapturas/gymscreenshot2.webp",
      "/src/media/XtremeGymCapturas/WhatsApp Image 2026-02-25 at 17.54.12.jpeg",
      "/src/media/XtremeGymCapturas/WhatsApp Image 2026-02-25 at 17.54.38.jpeg",
      "/src/media/XtremeGymCapturas/WhatsApp Image 2026-02-25 at 18.32.16.jpeg",
    ],
    role:
      "Participé en el diseño de la arquitectura y en la implementación completa de la aplicación móvil y el backend, con foco en escalabilidad, seguridad y preparación para entorno productivo. Más que un desarrollo técnico, el proyecto implicó comprender el modelo de negocio del gimnasio, optimizar procesos operativos y construir una herramienta alineada con objetivos comerciales reales.",
    mainTags: ["React Native", "Expo", "MercadoPago", "Django"],
    allTags: ["React Native", "Tailwind CSS", "Expo", "Node.js", "WebSockets","Firebase", "MercadoPago", "PostgreSQL", "PDF", "Push Notifications", "Cloud Storage", "Django", "Python"],
    storeUrl: "https://play.google.com/store/apps/details?id=com.fedevalle.xtremegym&pli=1",
  },
  {
    year: "2025",
    current: true,
    period: "2025",
    title: "PAICAT — Sistema de Ingreso UTN FRLP",
    company: "Proyecto académico · UTN FRLP, La Plata",
    intro: "Plataforma web para la gestión integral del curso de ingreso universitario de la UTN FRLP.",
    description:
      "Desarrollo de una plataforma web para digitalizar y optimizar la gestión del ingreso universitario de la UTN FRLP utilizando Laravel. El sistema administra comisiones con control de cupos, alumnos, docentes, asistencias con validación automática de porcentajes mínimos y calificaciones por materia con recuperatorios. Se estima su implementación para el inicio del Ingreso 2026.",
    details: [
      "Administración de comisiones con control de cupos",
      "Gestión de alumnos y docentes",
      "Registro de asistencias con validación automática de porcentajes mínimos",
      "Carga de calificaciones por materia con configuración de recuperatorios",
      "Esquema de roles (Administrador, Coordinador, Docente, Alumno)",
      "Generación de reportes en PDF y Excel",
      "Integración con bases de datos académicas externas en modo solo lectura",
      "Entorno contenerizado con Docker y Docker Compose (PHP, Nginx, MariaDB, Vite, Mailhog)",
    ],
    images: [
      "/src/media/PAICATCapturas/PantallaGeneralDeAlumnosEnRiesgo.jpeg",
      "/src/media/PAICATCapturas/PantallaHistorialAsistenciasPorComision.jpeg",
      "/src/media/PAICATCapturas/PantallaCargaDeCalificaciones.jpeg",
      "/src/media/PAICATCapturas/PantallaReporteDeAsistenciasEnPDF.jpeg",
    ],
    role:
      "Además de participar en tareas de análisis, diseño, elicitación y validación de requerimientos junto al área académica, me enfoqué especialmente en el diseño e implementación del módulo de Asistencias, definiendo reglas de negocio, modelado de datos y lógica de validación automática de porcentajes mínimos, asegurando consistencia y trazabilidad de la información.",
    mainTags: ["Laravel", "Docker", "MariaDB"],
    allTags: ["Laravel", "PHP", "Docker", "Docker Compose", "MariaDB", "Nginx", "Vite", "Mailhog", "PDF", "Excel", "Roles & Permisos"],
  },
  {
    year: "2025",
    current: false,
    period: "2025",
    title: "Sistema de Venta de Entradas",
    company: "Proyecto académico · UTN FRLP, La Plata",
    intro: "Aplicación web para gestión y venta de entradas con foco en buenas prácticas de ingeniería y trabajo colaborativo.",
    description:
      "Participé en el desarrollo de una aplicación web para la gestión y venta de entradas utilizando Django, implementando vistas y templates con renderizado del lado del servidor (SSR). El proyecto fue desarrollado con un fuerte enfoque en mantenibilidad, buenas prácticas de ingeniería y mejora continua.",
    details: [
      "Desarrollo de vistas y templates con renderizado SSR en Django",
      "Flujo colaborativo con Git y feature branches",
      "Pull requests y revisiones de código como parte del proceso de desarrollo",
      "Pruebas unitarias, de integración y end-to-end con Playwright",
      "Integración de Ruff para calidad de código",
      "Configuración de pipeline CI/CD con GitHub Actions para validaciones automáticas",
      "Contenerización completa con Docker",
    ],
    images: [
      "/src/media/EventHubCapturas/MenuPrincipal.jpeg",
      "/src/media/EventHubCapturas/Notificaciones.jpeg",
      "/src/media/EventHubCapturas/ProcesoDeCompra.jpeg",
      "/src/media/EventHubCapturas/PanelDeAdministracion.jpeg",
    ],
    role:
      "Esta experiencia fue especialmente enriquecedora para mi crecimiento profesional. Me permitió profundizar en el uso de GitHub Actions, comprender en la práctica la implementación de CI/CD y trabajar bajo una metodología ágil, entendiendo la importancia del testing, la revisión de código y los procesos colaborativos en entornos reales de desarrollo.",
    mainTags: ["Django", "Python", "Docker"],
    allTags: ["Django", "Python", "Docker", "Playwright", "GitHub Actions", "CI/CD", "Ruff", "Git", "SSR"],
  },
];

export const technologies = [
  {
    category: "Frontend",
    description: "Desarrollo de interfaces web y mobile con foco en experiencia de usuario.",
    skills: ["React", "React Native", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    description: "Construcción de APIs, lógica de negocio y arquitectura de servidores.",
    skills: ["Django", "Node.js", "Python"],
  },
  {
    category: "Base de datos",
    description: "Modelado de datos y gestión de bases relacionales.",
    skills: ["MySQL", "SQLite", "MariaDB"],
  },
  {
    category: "Testing",
    description: "Estrategias de verificación para garantizar calidad y confiabilidad del código.",
    skills: ["Playwright", "Test unitario", "Test de integración", "End to End"],
  },
  {
    category: "DevOps & Herramientas",
    description: "Automatización, contenedores y flujos de trabajo colaborativos.",
    skills: ["Docker", "Git", "GitHub Actions", "CI/CD", "Nginx", "Kanban"],
  },
];

export const navItems = ["ABOUT", "TECNOLOGÍAS", "PROYECTOS", "CONTACTO"];

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
    url: "https://www.linkedin.com/in/gonzalo-perez-4b94783b3",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227 .792 24 1 .798C .8 .8 .8 .8 .8 .8l-.8-.8z" />
      </svg>
    ),
  },
];