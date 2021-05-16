export class HttpError extends Error {
  constructor(public httpCode?: number) {
    super();
  }

  public serializeErrors() {
    throw new Error('Implement serialize error');
  }
}
