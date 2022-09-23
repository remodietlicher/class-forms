import { ObjectType } from "../util/ObjectType";
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
    const targetName = typeof target === "string" ? target : target.name;
    return this._fieldMetadatas.filter(
      (metadata) => metadata.target.name === targetName
    );
  }

  getFormMetadata(target: Function | string) {
    const targetName = typeof target === "string" ? target : target.name;
    return this._formMetadatas.find(
      (metadata) => metadata.target.name === targetName
    );
  }
}
