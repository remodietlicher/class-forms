/**
 * Error emitted when a member class should be rendered in a form
 * but the associated metadata is incomplete
 */
export class MemberClassError extends Error {
  constructor(message: string) {
    super(`Failed to build form for member class: ${message}`);
  }
}
