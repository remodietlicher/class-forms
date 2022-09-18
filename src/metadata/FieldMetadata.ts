import { FieldMetadataOptions } from "./options/FieldMetadataOptions";

export class FieldMetadata {
  target: Function;
  name: string;
  fieldType: string;
  options: FieldMetadataOptions | undefined;

  constructor(
    target: Function,
    name: string,
    fieldType: string,
    options?: FieldMetadataOptions
  ) {
    this.target = target;
    this.name = name;
    this.fieldType = fieldType;
    this.options = options;
  }
}
