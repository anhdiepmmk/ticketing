import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { logger } from '../logger';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

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
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    logger.info('Creating a user...');
    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signupRouter };
