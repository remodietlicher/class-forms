import { FieldMetadataOptions } from "../options/FieldMetadataOptions";

export class FieldMetadataArgs {
  target: Function;
  propertyKey: string;
  fieldType: string;
  options: FieldMetadataOptions | undefined;
}
