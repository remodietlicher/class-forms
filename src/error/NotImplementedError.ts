export class NotImplementedError extends Error {
  constructor(message: string) {
    super(`Trying to an unimplemented feature: ${message}`);
  }
}
