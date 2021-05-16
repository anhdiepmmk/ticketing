import { HttpError } from "./http-error";

export class DatabaseConnectionError extends HttpError {
  reason = 'Error connecting to database';
  httpCode = 503;

  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
