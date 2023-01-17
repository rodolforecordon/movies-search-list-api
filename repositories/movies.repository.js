// import User from '../models/user.model.js';
import axios from 'axios';
import dotenv from 'dotenv';
import redis from '../redisConfig.js';
dotenv.config();

const apiKey = process.env.OMDB_API_KEY;

const getMoviesSummary = async (title, type, year, page) => {
  try {
    // const cached = await redis.get('Batman');
    // console.log('cached', cached);
    // if (cached !== {}) return JSON.parse(cached);

    const url = `https://www.omdbapi.com/?s=${title}&type=${type}&y=${year}&page=${page}&apikey=${apiKey}`;
    const results = await axios.get(url);
    await redis.set('lastResult', JSON.stringify(results.data?.Search));
    console.log(await redis.get('lastResult'));
    return results;
  } catch (err) {
    throw err;
  }
};

const getMovieDetails = async (imdbID) => {
  try {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
    return await axios.get(url);
  } catch (err) {
    throw err;
  }
};

export default {
  getMoviesSummary,
  getMovieDetails,
};
