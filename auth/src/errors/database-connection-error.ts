import { HttpError } from "./http-error";

export class DatabaseConnectionError extends HttpError {
  reason = 'Error connecting to database';

  constructor() {
    super();
    this.httpCode = 503;
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
