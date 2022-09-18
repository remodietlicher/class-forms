import React from "react";
import { FormMetadata } from "../../metadata/FormMetadata";
import { ObjectField } from "./ObjectField";

interface FormProps {
  meta: FormMetadata;
}

export const ObjectForm: React.FC<FormProps> = ({ meta }: FormProps) => {
  const fieldElements = meta.fields.map((f) => {
    return <ObjectField fieldMeta={f} />;
  });

  return (
    <>
      <h1>{meta.target.name}</h1>
      <form>{fieldElements}</form>
    </>
  );
};
