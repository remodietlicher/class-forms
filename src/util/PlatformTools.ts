export class PlatformTools {
  static getGlobalVariable(): any {
    return global;
  }
}

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
