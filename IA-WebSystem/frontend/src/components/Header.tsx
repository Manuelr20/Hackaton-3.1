import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-gradient sticky-top shadow animate__animated animate__fadeInDown" style={{background: 'linear-gradient(90deg, #0d6efd 0%, #6610f2 100%)'}}>
    <div className="container-fluid">
      <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
        <span className="me-2" style={{fontSize: '2rem'}}>🤖</span> IA-WebSystem
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/form">Formulario</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">Acerca de</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/help">Ayuda</Link></li>
          <li className="nav-item ms-lg-3">
            <Link className="btn btn-warning btn-sm px-3 fw-bold" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
