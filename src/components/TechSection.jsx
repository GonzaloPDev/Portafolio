import React from "react";

const techGroups = [
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

export default function TechSection() {
  return (
    <div className="tech-section">
      <p className="tech-intro">
        Tecnologías con las que trabajo de forma consolidada en proyectos reales.
      </p>

      <div className="tech-groups">
        {techGroups.map((group) => (
          <div key={group.category} className="tech-group">
            <div className="tech-group-header">
              <h3 className="tech-category">{group.category}</h3>
              <p className="tech-description">{group.description}</p>
            </div>
            <div className="tech-bubbles">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-bubble">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}