import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import fs from 'fs';
import https from 'https';
import path from 'path';
import authRoutes from './routes/auth.js';
import dataRoutes from './routes/data.js';
import iaRoutes from './routes/ia.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { logger } from './middlewares/logger.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/ia', iaRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
};

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Servidor HTTPS escuchando en https://localhost:${PORT}`);
});
