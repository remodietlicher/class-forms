import "reflect-metadata";
import { getMetadataArgsStorage } from "../globals";
import { FieldMetadataOptions } from "../metadata/options/FieldMetadataOptions";

export function Field(options?: FieldMetadataOptions) {
  return function (target: Object, propertyKey: string) {
    const fieldType = Reflect.getMetadata("design:type", target, propertyKey);
    getMetadataArgsStorage().fields.push({
      target: target.constructor,
      propertyKey: propertyKey,
      fieldType: fieldType.name,
      options: options,
    });
  };
}
