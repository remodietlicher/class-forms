import { Field } from "../../src/decorator/Field";
import { Form } from "../../src/decorator/Form";
import { ChildClass } from "./ChildClass";

@Form()
export class ParentClass {
  @Field()
  member1: string;
  @Field({ cssClass: "someCssClass" })
  member2: ChildClass;
}
