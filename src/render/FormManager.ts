import { FormMetadata } from "../metadata/FormMetadata";
import { FormMetadataBuilder } from "../metadata/FormMetadataBuilder";
import { ObjectType } from "../util/ObjectType";
import { getMetadataArgsStorage } from "../globals";

export class FormManager {
  _formMetadatas: FormMetadata[];

  buildMetadatas() {
    const metadataBuilder = new FormMetadataBuilder(getMetadataArgsStorage());
    this._formMetadatas = metadataBuilder.build();
  }

  findMetadata(target: ObjectType<any>) {
    return this._formMetadatas.find((metadata) => metadata.target === target);
  }

  getMetadata(target: ObjectType<any>) {
    return this.findMetadata(target);
  }
}
