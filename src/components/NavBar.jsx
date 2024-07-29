import React from 'react';
import Home from '../pages/web/Home';
import About from '../pages/web/About';
import Contact from '../pages/web/Contact';
import { Link } from 'react-router-dom';

/*
<li><Link to="/">Home</Link></li>
<li><Link to="/about">Acerca de</Link></li>
<li><Link to="/contact">Contacto</Link></li>
*/


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          UL Journey
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/*<a className="nav-link active" aria-current="page" href="/">
                Home
              </a>*/}
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Acerca de</Link>
            </li>
            <li className="nav-item">
              <Link to="/conversation" className="nav-link">Conversaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;