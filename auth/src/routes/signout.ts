import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('OK');
});

export { router as signoutRouter };
