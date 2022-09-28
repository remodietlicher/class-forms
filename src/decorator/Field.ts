import "reflect-metadata";
import { getMetadataStorage } from "../globals";
import { FieldMetadataOptions } from "../metadata/options/FieldMetadataOptions";

/**
 *
 * @param options additional metadata for class fields
 * @returns
 */
export function Field(options?: FieldMetadataOptions) {
  return function (target: object, propertyKey: string) {
    const propertyType = Reflect.getMetadata(
      "design:type",
      target,
      propertyKey
    );
    getMetadataStorage().addFieldMetadata({
      target: target.constructor,
      propertyKey: propertyKey,
      propertyType: propertyType.name,
      options: options,
    });
  };
}
