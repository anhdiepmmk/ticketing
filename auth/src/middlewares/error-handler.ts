import { Request, Response } from 'express';
import { logger } from '../logger';

export const errorHandler = (err: Error, req: Request, res: Response, next: Function) => {
  logger.error(err.message, err);
  res.status(400).send({
    error: {
      message: err.message
    },
  });
};