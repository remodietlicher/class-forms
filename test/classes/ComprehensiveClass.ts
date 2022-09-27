import { Field } from "../../src/decorator/Field";
import { Form } from "../../src/decorator/Form";

@Form()
export class ComprehensiveClass {
  @Field()
  stringMember: string;
  @Field()
  numberMember: number;
  @Field()
  dateMember: Date;
}
