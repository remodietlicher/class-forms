export class FormMetadataError extends Error {
  constructor(message: string) {
    super(`Failed to build Form: ${message}`);
  }
}
