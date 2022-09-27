import { Field } from "../../src/decorator/Field";
import { Form } from "../../src/decorator/Form";
import { wait } from "../../src/util/PlatformTools";

const STORED_CLASSES = [
  { member1: "alpha", member2: "beta" },
  { member1: "gamma", member2: "delta" },
  { member1: "epsilon", member2: "zeta" },
];

const asyncFetcher = async () => {
  await wait(1000);
  return STORED_CLASSES;
};

@Form({ valueFetcher: asyncFetcher })
export class ChildFetchClass {
  @Field({ primary: true })
  member1: string;
  @Field()
  member2: string;

  constructor(member1: string, member2: string) {
    this.member1 = member1;
    this.member2 = member2;
  }
}

@Form()
export class FetchClass {
  @Field()
  parentMember: string;
  @Field()
  childClass: ChildFetchClass;
}
