import { FieldMetadataOptions } from "./options/FieldMetadataOptions";

/**
 * Class to hold metadata about form fields.
 */
export class FieldMetadata {
  // the target class
  target: Function;
  // the name of the class member
  propertyKey: string;
  // the type name of the class member
  propertyType: string;
  // opitional metadata for form fields
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
