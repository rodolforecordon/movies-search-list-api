import Redis from 'ioredis';

const redis = new Redis({
  host: 'redis-19081.c242.eu-west-1-2.ec2.cloud.redislabs.com',
  port: 19081,
  password: 'npkRA7vckKCwrU7LhMXFguCUhfl0t36H',
});

export default redis;
