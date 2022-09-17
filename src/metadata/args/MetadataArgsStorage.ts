import { FieldMetadataArgs } from "./FieldMetadataArgs";
import { FormMetadataArgs } from "./FormMetadataArgs";

export class MetadataArgsStorage {
  forms: FormMetadataArgs[] = [];
  fields: FieldMetadataArgs[] = [];
}
