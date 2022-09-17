import { FormMetadataArgs } from "./args/FormMetadataArgs";
import { FieldMetadata } from "./FieldMetadata";

export class FormMetadata {
  target: Function;
  medatadaArgs: FormMetadataArgs;
  fields: FieldMetadata[] = [];

  constructor(metadataArgs: FormMetadataArgs) {
    this.medatadaArgs = metadataArgs;
  }

  build() {
    this.target = this.medatadaArgs.target;
  }

  registerFields(fields: FieldMetadata[]) {
    this.fields.push(...fields);
  }
}
