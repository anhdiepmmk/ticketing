import { ValidationError } from 'express-validator';
import { HttpError } from './http-error';

export class RequestValidationError extends HttpError {
  constructor(public errors: ValidationError[]) {
    super();
    this.httpCode = 422;
    this.message = errors.map(e => e.msg).join(', ');
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
