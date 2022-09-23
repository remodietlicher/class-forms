import { Field } from "../../src/decorator/Field";
import { Form } from "../../src/decorator/Form";

@Form()
export class SubClass {
  @Field()
  subMember1: number;
}
