import './Footer.css';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'; // Replace with desired icons

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Navigation Links */}
        <div className="footer-links">
          <a href="#home">Home Page</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="#download" target="_blank" rel="noopener noreferrer">
            <FaDownload className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
