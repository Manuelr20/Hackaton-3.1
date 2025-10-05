import React from 'react';


const Footer: React.FC = () => (
  <footer className="text-white text-center py-4 mt-5 animate__animated animate__fadeInUp" style={{background: 'linear-gradient(90deg, #0d6efd 0%, #6610f2 100%)'}}>
    <div className="container">
      <div className="mb-2">
        <span style={{fontSize: '1.5rem'}}>🤖</span> <b>IA-WebSystem</b> &copy; {new Date().getFullYear()} | Hackatón 3.1
      </div>
      <div>
        <a href="/about" className="text-white me-3">Acerca de</a>
        <a href="/contact" className="text-white me-3">Contacto</a>
        <a href="/help" className="text-white">Ayuda</a>
      </div>
    </div>
  </footer>
);

export default Footer;
