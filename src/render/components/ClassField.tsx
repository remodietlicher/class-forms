import React from "react";
import { MemberClassError } from "../../error/MemberClassError";
import { NotImplementedError } from "../../error/NotImplementedError";
import { getMetadataStorage } from "../../globals";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ClassForm } from "./ClassForm";

import { InputField } from "./InputField";

export interface FieldProps {
  fieldMetadata: FieldMetadata;
}

/**
 * Component that renders an individual class member form field
 */
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
      // if the field type is a class, check if form data is available for it
      const childFormMetadata = getMetadataStorage().getFormMetadata(fieldType);
      // if there is, render the associated class form
      if (childFormMetadata) {
        component = (
          <ClassForm target={childFormMetadata.target} isChild={true} />
        );
        // else, throw error
      } else {
        throw new MemberClassError(
          `cannot render form for class member ${fieldType}, no metadata found`
        );
      }
    }
    return component;
  };
  return <>{renderComponent()}</>;
};
