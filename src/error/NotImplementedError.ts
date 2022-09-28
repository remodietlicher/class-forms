/**
 * Error to signal planned but not yet implemented features
 */
export class NotImplementedError extends Error {
  constructor(message: string) {
    super(`Trying to an unimplemented feature: ${message}`);
  }
}
