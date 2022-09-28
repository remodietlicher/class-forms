import { FormMetadataError } from "../error/FormMetadataError";
import { FieldMetadata } from "./FieldMetadata";
import { FormMetadata } from "./FormMetadata";

/**
 * Class that holds all the metadata provided by the {@link Form} and
 * {@link Field} decorators
 */
export class MetadataStorage {
  // form metadata array
  private _formMetadatas: FormMetadata[] = [];
  // field metadata array
  private _fieldMetadatas: FieldMetadata[] = [];

  /**
   * Add form metadata to the store
   *
   * @param metadata form metadata to store
   */
  addFormMetadata(metadata: FormMetadata) {
    this._formMetadatas.push(metadata);
  }

  /**
   * Add field metadata to the store
   *
   * @param metadata field metadata to store
   */
  addFieldMetadata(metadata: FieldMetadata) {
    this._fieldMetadatas.push(metadata);
  }

  /**
   * Get all form field metadata associated with the target class,
   * identified by it's constructor
   *
   * @param target class constructor name or function object
   *  for which field metadata should be returned
   * @returns field metadata associated with target
   */
  getFieldMetadatas(target: Function | string) {
    const targetName =
      typeof target === "string" ? target : target.name.toLowerCase();
    return this._fieldMetadatas.filter(
      (metadata) => metadata.target.name.toLowerCase() === targetName
    );
  }

  /**
   * Get a single form metadata associated with the target class,
   * identified by it's constructor
   *
   * @param target class constructor name or function object
   * @returns form metadata associated with the target class
   */
  getFormMetadata(target: Function | string) {
    const targetName =
      typeof target === "string" ? target : target.name.toLowerCase();
    const metadatas = this._formMetadatas.filter(
      // always identify target by name
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
