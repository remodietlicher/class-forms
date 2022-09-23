import React from "react";
import { getMetadataStorage } from "../../globals";
import { ObjectType } from "../../util/ObjectType";
import { ClassField } from "./ClassField";

interface FormProps {
  target: Function;
}

export const ClassForm: React.FC<FormProps> = ({ target }: FormProps) => {
  const formMetadata = getMetadataStorage().getFormMetadata(target);
  const fieldMetadatas = getMetadataStorage().getFieldMetadatas(target);
  const fieldElements = fieldMetadatas?.map((f) => {
    return <ClassField fieldMetadata={f} />;
  });

  return (
    <>
      <h1>{formMetadata?.target.name}</h1>
      <form>{fieldElements}</form>
    </>
  );
};
