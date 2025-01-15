import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/NR0SVG.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('.dropdown')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="header-brand">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div className="dropdown">
          <button
            className={`modern-menu-button ${menuOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`dropdown-content ${menuOpen ? 'open' : ''}`}>
            <nav>
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/research">Research</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
