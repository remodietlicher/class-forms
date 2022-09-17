import { getMetadataArgsStorage } from "../globals";

export function Form() {
  return function (target: Function) {
    getMetadataArgsStorage().forms.push({
      target: target,
    });
  };
}
