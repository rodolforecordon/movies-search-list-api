import winston from 'winston';

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const myWinstonConfig = winston.createLogger({
  level: 'silly',
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'my-api.log' })],
  format: combine(label({ label: 'my-api' }), timestamp(), myFormat),
});

export default myWinstonConfig;
