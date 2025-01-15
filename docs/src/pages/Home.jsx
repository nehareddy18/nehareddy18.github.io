import React from 'react';
import './Home.css';
import Side from './Side'; // Adjust the import path as needed

import profileImage from '../assets/profileImage.png';

import figmaLogo from '../assets/figmaLogo.png';
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import muralLogo from '../assets/muralLogo.png';
import balsamiqLogo from '../assets/balsamiqLogo.png';
import moqupsLogo from '../assets/moqupsLogo.png';
import journeyImage from '../assets/journeyImage.png';
import { Link } from 'react-router-dom';
import caseImage from '../assets/cass.png';
import PageTransition from "../components/PageTransition";


export default function Home() {
  return (
    <PageTransition>
    <div className="home-page">
      {/* Side Components */}
      <Side isHome={true} orientation="left">
        <div className="side-content">
          <ul>
            <li><a href="#hero">Hero</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
          </ul>
        </div>
      </Side>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">Neha Reddy.</h1>
          <h2 className="hero-subtitle">Transforming passion into pixels.</h2>
          <p className="hero-description">
            My work is a testament to the belief that exceptional design is born from a deep-seated passion for creating
            meaningful digital experiences. I meticulously work towards translating this passion into every pixel,
            crafting intuitive interfaces that resonate with users on a profound level.
          </p>
        </div>
      </section>

      {/* Continuation Section */}
      <section className="continuation-section">
        <div className="continuation-container">
          <div className="continuation-image">
            <img src={profileImage} alt="Neha Reddy" />
          </div>
          <div className="continuation-text">
            <p>
              As a recent graduate and Master's student in UI/UX design, I bring fresh perspectives and a passion for user-centered solutions. My academic projects and extracurricular activities showcase strong work ethics and commitment to excellence. 
              Eager to apply my skills to real-world challenges, I seek opportunities to create impactful, innovative designs while continuously learning and growing as a professional.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-track">
            <img src={figmaLogo} alt="Figma" />
            <img src={moqupsLogo} alt="Moqups" />
            <img src={balsamiqLogo} alt="Balsamiq" />
            <img src={htmlLogo} alt="HTML" />
            <img src={cssLogo} alt="CSS" />
            <img src={muralLogo} alt="Mural" />
            <img src={figmaLogo} alt="Figma" />
            <img src={moqupsLogo} alt="Moqups" />
            <img src={balsamiqLogo} alt="Balsamiq" />
            <img src={htmlLogo} alt="HTML" />
            <img src={cssLogo} alt="CSS" />
            <img src={muralLogo} alt="Mural" />
          </div>
        </div>
      </section>

      {/* Design Journey Section */}
      <section id="journey" className="design-journey-section">
        <div className="journey-content">
          <h2 className="journey-title">My Design Journey</h2>
          <p className="journey-description">
            A progression of design thinking and execution. From foundational principles to innovative solutions.
            Cultivating a design philosophy through practical application. Witness the evolution of my design expertise.
          </p>
          <Link to="/projects">
            <button className="journey-button">My Projects →</button>
          </Link>
        </div>
        <div className="journey-image">
          <img src={journeyImage} alt="Design Journey" />
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="case-studies-section">
      <div className="case-studies-header">
        <h2 className="case-studies-title">Case Studies and User Research</h2>
        <p className="case-studies-description">
          User-centered design is my compass. Uncovering insights to craft exceptional experiences.
          From research to reality, shaping the future.
        </p>
        <Link to="/research">
            <button className="case-studies-button">My Research →</button>
          </Link>
      </div>
      <div className="case-image">
          <img src={caseImage} alt="case studies" />
        </div>
      </section>

    </div>
    </PageTransition>
  );
}
