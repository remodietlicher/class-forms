export class MemberClassError extends Error {
  constructor(message: string) {
    super(`Failed to build form for member class: ${message}`);
  }
}
