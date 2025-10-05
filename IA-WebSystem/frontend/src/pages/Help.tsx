import React from 'react';

const faq = [
  { q: '¿Cuál es el objetivo del proyecto?', a: 'Demostrar una app web fullstack con autenticación, dashboard y un asistente inteligente.' },
  { q: '¿Cómo me registro?', a: 'Haz clic en el botón "¡Regístrate gratis!" en la página de inicio y completa el formulario.' },
  { q: '¿Qué tecnologías usa?', a: 'React, TypeScript, Bootstrap, Node.js, Express y autenticación JWT.' },
  { q: '¿Cómo contacto al equipo?', a: 'Puedes escribirnos a contacto@iawebsystem.com.' },
  { q: '¿Puedo ver mis datos?', a: 'Sí, inicia sesión y accede al Dashboard para ver y gestionar tus datos.' },
  { q: '¿Qué es el Asistente IA?', a: 'Es un componente que responde preguntas frecuentes sobre la plataforma.' },
];

const Help: React.FC = () => (
  <div className="container py-5 animate__animated animate__fadeIn">
    <h2 className="mb-4 text-primary">Ayuda y Preguntas Frecuentes</h2>
    <div className="accordion" id="faqAccordion">
      {faq.map((item, idx) => (
        <div className="accordion-item" key={idx}>
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded="false" aria-controls={`collapse${idx}`}>
              {item.q}
            </button>
          </h2>
          <div id={`collapse${idx}`} className="accordion-collapse collapse" aria-labelledby={`heading${idx}`} data-bs-parent="#faqAccordion">
            <div className="accordion-body">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Help;
