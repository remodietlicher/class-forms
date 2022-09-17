import { getMetadataArgsStorage } from "../globals";

export function Field() {
  return function (target: Object, propertyKey: string) {
    getMetadataArgsStorage().fields.push({
      target: target.constructor,
      propertyKey: propertyKey,
    });
  };
}
