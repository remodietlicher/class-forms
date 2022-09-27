import React from "react";
import { NotImplementedError } from "../../error/NotImplementedError";
import { getMetadataStorage } from "../../globals";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ClassForm } from "./ClassForm";

import { InputField } from "./InputField";

export interface FieldProps {
  fieldMetadata: FieldMetadata;
}

export const ClassField: React.FC<FieldProps> = ({
  fieldMetadata,
}: FieldProps) => {
  const fieldType = fieldMetadata.propertyType.toLowerCase();
  const renderComponent = () => {
    let component = <p>component {fieldType} not found</p>;
    if (fieldType === "date") {
      component = (
        <InputField fieldMetadata={fieldMetadata} inputType={fieldType} />
      );
    } else if (fieldType === "string") {
      component = (
        <InputField fieldMetadata={fieldMetadata} inputType={fieldType} />
      );
    } else if (fieldType === "number") {
      component = (
        <InputField fieldMetadata={fieldMetadata} inputType={fieldType} />
      );
    } else if (fieldType === "array") {
      throw new NotImplementedError("Array forms");
    } else {
      const childFormMetadata = getMetadataStorage().getFormMetadata(fieldType);
      if (childFormMetadata) {
        component = <ClassForm target={childFormMetadata.target} />;
      }
    }
    return component;
  };
  return <>{renderComponent()}</>;
};
