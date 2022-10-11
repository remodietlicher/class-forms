import { OnSubmitHandler } from "../decorator/Form";
import { FormMetadataOptions } from "./options/FormMetadataOptions";

/**
 * Class that holds metadata for entire objects. Note that each form field
 * annotated by {@link Field} will share the target with the associated
 * form class
 */
export class FormMetadata {
  // on submit callback
  onSubmitHandler: OnSubmitHandler;
  // constructor of the form class
  target: Function;
  // opional form metadata
  options: FormMetadataOptions | undefined;

  constructor(target: Function, options?: FormMetadataOptions) {
    this.target = target;
    this.options = options;
  }
}
