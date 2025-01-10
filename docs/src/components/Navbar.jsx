import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="header-brand">Neha Reddy Damannagari</div>
        <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
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
