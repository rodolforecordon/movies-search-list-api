// import UserService from '../services/user.service.js';

// const register = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       throw new Error('Email and password are mandatory.');

//     const registerUser = await UserService.register(email, password);

//     logger.info(`POST /register - User ${email} registered.`);
//     return res.status(200).send(registerUser);
//   } catch (err) {
//     next(err);
//   }
// };
import MoviesServices from '../services/movies.service.js';

const getMovies = async (req, res, next) => {
  try {
    const processStart = new Date().getTime();
    let processEnd;
    const { title, type, year, page } = req.query;

    const getMoviesList = await MoviesServices.getMoviesSummary(title, type, year, page);
    const moviesList = getMoviesList.data?.Search;
    const totalMovies = getMoviesList.data?.totalResults;
    const message = getMoviesList.message;

    // checking response
    if (!moviesList) {
      return await res.status(200).send({ message });
    }

    // adding movies details to movie summary
    for (let i = 0; i < moviesList.length; i++) {
      const { imdbID } = moviesList[i];
      const getDetails = await MoviesServices.getMovieDetails(imdbID);
      moviesList[i].DetailedInfo = getDetails.data;
      processEnd = new Date().getTime();
    }

    logger.info(`GET /movies/ - request process time: ${processEnd - processStart}ms.`);

    return await res
      .status(200)
      .set('Cache-control', 'public, max-age=84000')
      .send({ moviesList, totalMovies });
  } catch (err) {
    next(err);
  }
};

export default {
  getMovies,
};
