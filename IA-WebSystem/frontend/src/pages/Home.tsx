import React from 'react';


const Home: React.FC = () => (
  <div className="home-hero animate__animated animate__fadeIn">
    <section className="py-5 bg-gradient text-white" style={{background: 'linear-gradient(90deg, #0d6efd 0%, #6610f2 100%)'}}>
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-3">IA-WebSystem</h1>
        <p className="lead mb-4">Plataforma web moderna con autenticación, dashboard, formularios y un asistente inteligente impulsado por IA.</p>
        <a href="/register" className="btn btn-lg btn-warning shadow">¡Regístrate gratis!</a>
      </div>
    </section>
    <section className="container py-5">
      <h2 className="mb-4 text-primary">¿Por qué usar IA-WebSystem?</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow animate__animated animate__fadeInUp">
            <div className="card-body text-center">
              <span className="display-4 text-info mb-3 d-block">🔒</span>
              <h5 className="card-title">Autenticación segura</h5>
              <p className="card-text">Tus datos están protegidos con autenticación JWT y HTTPS.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow animate__animated animate__fadeInUp">
            <div className="card-body text-center">
              <span className="display-4 text-success mb-3 d-block">📊</span>
              <h5 className="card-title">Dashboard visual</h5>
              <p className="card-text">Visualiza y gestiona tus datos de forma clara y atractiva.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow animate__animated animate__fadeInUp">
            <div className="card-body text-center">
              <span className="display-4 text-warning mb-3 d-block">🤖</span>
              <h5 className="card-title">Asistente IA</h5>
              <p className="card-text">Obtén respuestas automáticas y análisis de texto usando inteligencia artificial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
