
import express from 'express';
const router = express.Router();

// Preguntas y respuestas locales
const faq = [
  { q: '¿Cuál es el objetivo del proyecto?', a: 'Demostrar una app web fullstack con autenticación, dashboard y un asistente inteligente.' },
  { q: '¿Cómo me registro?', a: 'Haz clic en el botón "¡Regístrate gratis!" en la página de inicio y completa el formulario.' },
  { q: '¿Qué tecnologías usa?', a: 'React, TypeScript, Bootstrap, Node.js, Express y autenticación JWT.' },
  { q: '¿Cómo contacto al equipo?', a: 'Puedes escribirnos a contacto@iawebsystem.com.' },
  { q: '¿Puedo ver mis datos?', a: 'Sí, inicia sesión y accede al Dashboard para ver y gestionar tus datos.' },
  { q: '¿Qué es el Asistente IA?', a: 'Es un componente que responde preguntas frecuentes sobre la plataforma.' },
];

router.post('/analyze', (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ result: 'Pregunta no válida.' });
  }
  // Búsqueda simple por coincidencia de pregunta
  const found = faq.find(f => text.toLowerCase().includes(f.q.toLowerCase().slice(0, 10)));
  if (found) {
    return res.json({ result: found.a });
  }
  // Respuesta por defecto
  res.json({ result: 'No tengo una respuesta para esa pregunta. Intenta con otra o revisa la sección de ayuda.' });
});

export default router;
