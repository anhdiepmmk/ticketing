import { Request, Response } from 'express';
import { logger } from '../logger';
import _ from 'lodash';

import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: Function) => {
  logger.error(err.message, err);
  
  if (err instanceof RequestValidationError) {
    
    return res.status(err.httpCode!).json({
      errors: err.serializeErrors(),
    });
  }
  
  if (err instanceof DatabaseConnectionError) {
    return res.status(err.httpCode!).json({
      errors: err.serializeErrors(),
    });
  }
  
  const httpCode: number = _.get(err, 'httpCode', 400);
  const message: string = _.get(err, 'message', 'Something went wrong');
  res.status(httpCode).json({ 
    errors: [{ message }],
  });
};