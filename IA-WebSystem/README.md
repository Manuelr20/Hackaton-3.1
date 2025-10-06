# IA-WebSystem

Aplicación web fullstack con frontend en React + TypeScript y backend en Node.js + Express, con integración de IA.

## Tecnologías utilizadas
- Frontend: React, TypeScript, React Router, Bootstrap 5
- Backend: Node.js, Express.js
- Persistencia: Archivo JSON
- Autenticación: JWT o usuarios simulados
- IA: API externa (OpenAI/HuggingFace)

## Estructura
- `/frontend`: Aplicación cliente
- `/backend`: Servidor Express

## ¿Cómo ejecutar el proyecto localmente?


### 1. Instala dependencias
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Configura variables de entorno
Copia `.env.example` a `.env` en `/backend` y ajusta los valores.

### 3. Ejecuta el backend
```bash
cd backend
npm run dev
```

### 4. Ejecuta el frontend
```bash
cd frontend
npm start
```

---

## Descripción
Proyecto de ejemplo para hackatón: sistema web con autenticación, dashboard, formulario, integración IA y más.
