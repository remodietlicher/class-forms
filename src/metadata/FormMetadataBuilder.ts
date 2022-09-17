import { MetadataArgsStorage } from "./args/MetadataArgsStorage";
import { FieldMetadata } from "./FieldMetadata";
import { FormMetadata } from "./FormMetadata";

export class FormMetadataBuilder {
  metadataArgsStorage: MetadataArgsStorage;

  constructor(metadataArgsStorage: MetadataArgsStorage) {
    this.metadataArgsStorage = metadataArgsStorage;
  }

  build(): FormMetadata[] {
    let formMetadatas = this.metadataArgsStorage.forms.map((f) => {
      const formMetadata = new FormMetadata(f);
      formMetadata.build();
      return formMetadata;
    });

    formMetadatas = formMetadatas.map((form) => {
      const fieldArgs = this.metadataArgsStorage.fields.filter(
        (field) => field.target.name === form.target.name
      );
      const fields = fieldArgs.map((f) => {
        return new FieldMetadata(f.target, f.propertyKey);
      });
      form.registerFields(fields);
      return form;
    });

    return formMetadatas;
  }
}
