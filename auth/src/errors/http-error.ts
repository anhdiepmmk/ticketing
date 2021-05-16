export class HttpError extends Error {
  constructor(public httpCode?: number) {
    super();
  }
}
