import { getMetadataStorage } from "../src/globals";
import { FieldMetadata } from "../src/metadata/FieldMetadata";
import { FormMetadata } from "../src/metadata/FormMetadata";
import { SimpleClass } from "./classes/SimpleClass";

describe("Class metadata", () => {
  let formMetadata: FormMetadata | undefined;
  let fieldMetadatas: FieldMetadata[] | undefined;
  beforeEach(() => {
    formMetadata = getMetadataStorage().getFormMetadata(SimpleClass);
    fieldMetadatas = getMetadataStorage().getFieldMetadatas(SimpleClass);
  });
  it("should map class member variables to string names", () => {
    const fieldNames = fieldMetadatas?.map((f) => f.propertyKey);
    expect(fieldNames).toEqual(["member1", "member2"]);
  });

  it("should provide additional information with optional arguments", () => {
    const options = fieldMetadatas?.map((f) => f.options?.cssClass);
    expect(options).toEqual([undefined, "button on-hover"]);
  });

  it("should provide metadata searchable by case-insensitive class name", () => {
    const formMetadataBByName =
      getMetadataStorage().getFormMetadata("simpleclass");

    expect(formMetadataBByName).toEqual(formMetadata);
  });
});
