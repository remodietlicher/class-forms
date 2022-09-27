import { FormMetadataError } from "../error/FormMetadataError";
import { FieldMetadata } from "./FieldMetadata";
import { FormMetadata } from "./FormMetadata";

export class MetadataStorage {
  private _formMetadatas: FormMetadata[] = [];
  private _fieldMetadatas: FieldMetadata[] = [];

  addFormMetadata(metadata: FormMetadata) {
    this._formMetadatas.push(metadata);
  }

  addFieldMetadata(metadata: FieldMetadata) {
    this._fieldMetadatas.push(metadata);
  }

  getFieldMetadatas(target: Function | string) {
    const targetName =
      typeof target === "string" ? target : target.name.toLowerCase();
    return this._fieldMetadatas.filter(
      (metadata) => metadata.target.name.toLowerCase() === targetName
    );
  }

  getFormMetadata(target: Function | string) {
    const targetName =
      typeof target === "string" ? target : target.name.toLowerCase();
    const metadatas = this._formMetadatas.filter(
      (metadata) => metadata.target.name.toLowerCase() === targetName
    );
    if (!metadatas || metadatas.length == 0)
      throw new FormMetadataError(
        `Could not find form metadata for target ${targetName}`
      );
    if (metadatas.length != 1)
      throw new FormMetadataError(
        `Multiple form metadatas match for class ${targetName}`
      );
    return metadatas[0];
  }
}
