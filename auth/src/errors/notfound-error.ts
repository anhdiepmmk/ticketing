import { ValidationError } from 'express-validator';
import { HttpError } from './http-error';

export class NotFoundError extends HttpError {
  httpCode = 404;

  constructor(message: string = 'Not found') {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
