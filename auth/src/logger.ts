import { createLogger, format, transports, Logger } from 'winston';

const logger: Logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
  transports: [
    new transports.Console(),
  ],
});

export { logger };