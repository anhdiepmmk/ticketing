import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { logger } from '../logger';

const router = express.Router();

router.post('/api/users/signup', 
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ max: 20, min: 4 })
      .withMessage('Password must be between 4 and 20 characters')
  ], 
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const message = errors.array().map(e => e.msg).join(', ');
      throw new Error(message);
    }

    logger.info('Creating a user...');
    throw new Error('Error connecting to database');

    res.send({});
  }
);

export { router as signupRouter };
