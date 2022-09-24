import { Field } from "../../src/decorator/Field";
import { Form } from "../../src/decorator/Form";

@Form()
export class ChildClass {
  @Field()
  subMember1: string;
}
