import { Field } from "../../src/decorator/Field";
import { Form } from "../../src/decorator/Form";
import { SubClass } from "./SubClass";

@Form()
export class SomeClass {
  @Field()
  member1: string;
  @Field({ cssClass: "someCssClass" })
  member2: SubClass;
}
