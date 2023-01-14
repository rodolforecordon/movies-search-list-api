// import User from '../models/user.model.js';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.OMDB_API_KEY;

const getMoviesSummary = async (title, type, year, page) => {
  try {
    console.log(apiKey);
    const url = `https://www.omdbapi.com/?s=${title}&type=${type}&y=${year}&page=${page}&apikey=${apiKey}`;
    return await axios.get(url);
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
