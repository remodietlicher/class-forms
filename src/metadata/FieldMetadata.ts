import { FieldMetadataOptions } from "./options/FieldMetadataOptions";

export class FieldMetadata {
  target: Function;
  propertyKey: string;
  propertyType: string;
  options: FieldMetadataOptions | undefined;

  constructor(
    target: Function,
    propertyKey: string,
    fieldType: string,
    options?: FieldMetadataOptions
  ) {
    this.target = target;
    this.propertyKey = propertyKey;
    this.propertyType = fieldType;
    this.options = options;
  }
}
