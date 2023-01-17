import http from 'http';
import app from './app.js';
import redis from './redisConfig.js';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, async () => {
  try {
    console.log(`API started on port ${port}.`);
    // redis.on('connect', () => console.log(`Redis ${redis.status}.`));
    // const toBeCached = await axios.get(
    //   'http://localhost:3000/movies/?title=Batman&type=movie&year=&page=1'
    // );
    // console.log(toBeCached);
    // await redis.set('Batman', JSON.stringify(toBeCached.data));
  } catch (err) {
    console.log(err);
  }
});
