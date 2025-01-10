import React from "react";
import "./Research.css";
import lyft from "../assets/lyft.png";
import fway from "../assets/fway.png";
import zara from "../assets/zara.png";
import comingUp from "../assets/comingUp.png";
import bath from "../assets/bath.png";

export default function Research() {
  const projects = [
    {
      title: "ACE @ Founderway",
      description:
        "New Feature Research during my internship at Founderway :)",
      link: "https://www.behance.net/gallery/216492153/New-feature-research-founderway",
      image: fway, // Replace with the actual image path
    },
    {
      title: "ZARA Shopping App Design Breakdown",
      description:
        "Zara's app design and smart fixes for a better shopping experience! 🛒",
      link: "https://www.behance.net/gallery/216489675/Zaras-App-Design-Breakdown",
      image: zara , // Replace with the actual image path
    },
    {
      title: "Lyft app's design case study",
      description:
        "Fixing UX flaws, boosting usability, and creating a seamless ridesharing experience! ✨📱",
      link: "https://www.behance.net/gallery/216490511/Lyft-Apps-Design-Case-Study",
      image: lyft, // Replace with the actual image path
    },

  ];

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="sticky-title">Research</div>
        {projects.map((project, index) => (
          <div className="project-row" key={index}>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-line"></div>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">
                View Project <span className="arrow">→</span>
              </a>
            </div>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
