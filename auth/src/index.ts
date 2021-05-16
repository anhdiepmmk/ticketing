import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';

const app = express();
app.use(json());

app.use(currentUserRouter);

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there!');
});

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
