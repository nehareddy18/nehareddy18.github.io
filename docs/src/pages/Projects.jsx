import React from "react";
import "./Projects.css";
import comingUp from "../assets/comingUp.png";
import bb from "../assets/b&b.png";
import dollar from "../assets/dollartree.png";

export default function Research() {
  const projects = [
    {
      title: "Dollar Tree app design",
      description:
        "Visualizing an app for Dollar Tree, no more struggling on website ;)",
      link: "https://www.behance.net/gallery/216494629/Dollar-Tree-App-Design",
      image: dollar , // Replace with the actual image path
    },
    {
      title: "Bath & Bodyworks redesigned",
      description:
        "A research-driven redesign of the Bath & Body Works app, focusing on usability, streamlined navigation, and enhanced customer experience!",
      link: "https://www.behance.net/gallery/216493625/Bath-and-Body-Works-App-Redesignrmgmt",
      image: bb, // Replace with the actual image path
    },
  {
      title: "New design project coming soon",
      description:
        "Working on an end-to-end app design process.",
      link: "/case-study-watermgmt",
      image: comingUp, // Replace with the actual image path
    },
  ];

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="sticky-title">Projects</div>
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
