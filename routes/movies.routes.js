import { Router } from 'express';
import MoviesController from '../controllers/movies.controller.js';

const router = Router();

router.get('/', MoviesController.getMovies);

export default router;
