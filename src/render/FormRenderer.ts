import React from "react";
import { ObjectType } from "../util/ObjectType";
import { FormManager } from "./FormManager";

export class FormRenderer {
  readonly _manager: FormManager;

  constructor() {
    this._manager = new FormManager();
    this._manager.buildMetadatas();
  }

  render<FormObject>(formObject: ObjectType<FormObject>) {
    const metadata = this._manager.getMetadata(formObject);

    return metadata;
  }
}
