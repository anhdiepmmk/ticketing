export abstract class HttpError extends Error {
  abstract httpCode?: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
  }

  abstract serializeErrors(): {
    message: string,
    field?: string,
  }[];
}
