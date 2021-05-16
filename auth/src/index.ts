import express from 'express';
import 'express-async-errors';
// eslint-disable-next-line import/no-extraneous-dependencies
import { json } from 'body-parser';
import { logger } from './logger';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/notfound-error';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const PORT = 3000;
const server = app.listen(PORT, () => {
  logger.info(`Listing on port ${PORT}!`);
});

const gracefulShutDown = () => {
  logger.info('Received SIGINT or SIGTERM.');
  logger.info('Closing http server.');
  server.close(() => {
    logger.info('Http server closed');
  });
};

process.on('SIGTERM', gracefulShutDown);
process.on('SIGINT', gracefulShutDown);
