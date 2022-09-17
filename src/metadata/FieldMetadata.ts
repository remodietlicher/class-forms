export class FieldMetadata {
  target: Function;
  type: string;
  constructor(target: Function, type: string) {
    this.target = target;
    this.type = type;
  }
}
