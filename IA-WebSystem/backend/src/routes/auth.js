import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'user123' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
});

router.post('/register', (req, res) => {
  // Simulación: no se guarda realmente
  res.json({ message: 'Registro simulado exitoso' });
});

export default router;
