import { getMetadataStorage } from "../globals";

export function Form() {
  return function (target: Function) {
    getMetadataStorage().addFormMetadata({
      target: target,
    });
  };
}
