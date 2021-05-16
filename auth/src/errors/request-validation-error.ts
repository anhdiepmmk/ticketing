import { ValidationError } from 'express-validator';
import { HttpError } from './http-error';

export class RequestValidationError extends HttpError {
  httpCode = 422;

  constructor(public errors: ValidationError[]) {
    super();
    
    this.message = errors.map(e => e.msg).join(', ');
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(error => ({
        message: error.msg, field: error.param,
    }));
  }
}
