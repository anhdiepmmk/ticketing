import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

const PORT = 3000;
const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listing on port ${PORT}!`);
});

const gracefulShutDown = () => {
  // eslint-disable-next-line no-console
  console.info('Received SIGINT or SIGTERM.');
  // eslint-disable-next-line no-console
  console.log('Closing http server.');
  server.close(() => {
    // eslint-disable-next-line no-console
    console.log('Http server closed');
  });
};

process.on('SIGTERM', gracefulShutDown);
process.on('SIGINT', gracefulShutDown);
