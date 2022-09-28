import { getMetadataStorage } from "../globals";
import { FormMetadataOptions } from "../metadata/options/FormMetadataOptions";

/**
 *
 * @param options optional metadata for class forms
 * @returns
 */
export function Form(options?: FormMetadataOptions) {
  return function (target: Function) {
    getMetadataStorage().addFormMetadata({
      target: target,
      options: options,
    });
  };
}
