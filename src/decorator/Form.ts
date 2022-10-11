import { getMetadataStorage } from "../globals";
import { FormMetadataOptions } from "../metadata/options/FormMetadataOptions";

/**
 *
 */
export interface OnSubmitHandler {
  (classData: any): void;
}

/**
 *
 * @param options optional metadata for class forms
 * @returns
 */
export function Form(
  onSubmitHandler: OnSubmitHandler,
  options?: FormMetadataOptions
) {
  return function (target: Function) {
    getMetadataStorage().addFormMetadata({
      onSubmitHandler: onSubmitHandler,
      target: target,
      options: options,
    });
  };
}
