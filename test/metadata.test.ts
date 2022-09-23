import { getMetadataStorage } from "../src/globals";
import { FieldMetadata } from "../src/metadata/FieldMetadata";
import { FormMetadata } from "../src/metadata/FormMetadata";
import { SimpleClass } from "./objects/SimpleClass";

describe("Object decorators", () => {
  let formMetadata: FormMetadata | undefined;
  let fieldMetadatas: FieldMetadata[] | undefined;
  beforeEach(() => {
    formMetadata = getMetadataStorage().getFormMetadata(SimpleClass);
    fieldMetadatas = getMetadataStorage().getFieldMetadatas(SimpleClass);
  });
  it("should map object member variables to string lists", () => {
    const fieldNames = fieldMetadatas?.map((f) => f.propertyKey);
    expect(fieldNames).toEqual(["member1", "member2"]);
  });

  it("should provide additional information in an options object", () => {
    const options = fieldMetadatas?.map((f) => f.options?.cssClass);
    expect(options).toEqual([undefined, "button on-hover"]);
  });
});
