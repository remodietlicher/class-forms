import { Field } from "../../src/decorator/Field";
import { Form } from "../../src/decorator/Form";

@Form()
export class SimpleClass {
  @Field()
  member1: string;
  @Field({ cssClass: "button on-hover" })
  member2: number;
}
