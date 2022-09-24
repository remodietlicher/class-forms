import React from "react";
import { getMetadataStorage } from "../../globals";
import { ClassField } from "./ClassField";

interface FormProps {
  target: Function;
  root?: boolean;
}

export const ClassForm: React.FC<FormProps> = ({ target, root }: FormProps) => {
  const formMetadata = getMetadataStorage().getFormMetadata(target);
  const fieldMetadatas = getMetadataStorage().getFieldMetadatas(target);
  const renderFieldComponents = () => {
    return fieldMetadatas?.map((f) => {
      return (
        <ClassField
          key={`ClassField_${f.target.name}_${f.propertyKey}`}
          fieldMetadata={f}
        />
      );
    });
  };

  return (
    <React.Fragment key={`fragment_${formMetadata?.target.name}`}>
      <h1>{formMetadata?.target.name}</h1>
      {root ? <form>{renderFieldComponents()}</form> : renderFieldComponents()}
    </React.Fragment>
  );
};
