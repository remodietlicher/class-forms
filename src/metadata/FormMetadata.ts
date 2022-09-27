import { FormMetadataOptions } from "./options/FormMetadataOptions";

export class FormMetadata {
  target: Function;
  options: FormMetadataOptions | undefined;

  constructor(target: Function, options?: FormMetadataOptions) {
    this.target = target;
    this.options = options;
  }
}
