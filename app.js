import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import winston from './winston.js';
import moviesRoutes from './routes/movies.routes.js';

// Main setup
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.static('public'));
app.use(compression());

global.logger = winston;

// Routes
app.use('/movies', moviesRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl}- ${err.message}`);
  res.status(400).send({ error: err });
});

export default app;
