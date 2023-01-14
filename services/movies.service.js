import MoviesRepository from '../repositories/movies.repository.js';

const getMoviesSummary = async (title, type, year, page) => {
  try {
    if (title) return MoviesRepository.getMoviesSummary(title, type, year, page);

    return { message: 'Please provide a movie title.' };
  } catch (err) {
    throw err;
  }
};

const getMovieDetails = async (imdbID) => {
  try {
    return await MoviesRepository.getMovieDetails(imdbID);
  } catch (err) {
    throw err;
  }
};

export default {
  getMoviesSummary,
  getMovieDetails,
};
