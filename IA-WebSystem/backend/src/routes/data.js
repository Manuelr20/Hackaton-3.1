import express from 'express';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

const router = express.Router();
const DATA_FILE = process.env.DATA_FILE || './data.json';
const __dirname = path.resolve();

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'Token requerido' });
  try {
    const token = auth.split(' ')[1];
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido' });
  }
}

router.get('/', authMiddleware, (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, DATA_FILE)));
  res.json(data);
});

router.post('/', authMiddleware, (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, DATA_FILE)));
  const newItem = { id: Date.now(), ...req.body };
  data.push(newItem);
  fs.writeFileSync(path.join(__dirname, DATA_FILE), JSON.stringify(data, null, 2));
  res.status(201).json(newItem);
});

router.put('/:id', authMiddleware, (req, res) => {
  let data = JSON.parse(fs.readFileSync(path.join(__dirname, DATA_FILE)));
  const idx = data.findIndex(i => i.id == req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'No encontrado' });
  data[idx] = { ...data[idx], ...req.body };
  fs.writeFileSync(path.join(__dirname, DATA_FILE), JSON.stringify(data, null, 2));
  res.json(data[idx]);
});

router.delete('/:id', authMiddleware, (req, res) => {
  let data = JSON.parse(fs.readFileSync(path.join(__dirname, DATA_FILE)));
  data = data.filter(i => i.id != req.params.id);
  fs.writeFileSync(path.join(__dirname, DATA_FILE), JSON.stringify(data, null, 2));
  res.json({ message: 'Eliminado' });
});

export default router;
