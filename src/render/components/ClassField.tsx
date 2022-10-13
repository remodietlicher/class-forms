import React from "react";
import { MemberClassError } from "../../error/MemberClassError";
import { NotImplementedError } from "../../error/NotImplementedError";
import { getMetadataStorage } from "../../globals";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { RegisterFormEventHandler } from "../RegisterFormEventHandler";
import { ClassForm } from "./ClassForm";
import { ClassFormUnit } from "./ClassFormUnit";

import { InputField } from "./InputField";

export interface FieldProps {
  // Metadata from decorators for this field
  fieldMetadata: FieldMetadata;
  // function to register this class in form submission
  registerFormEventHandler: RegisterFormEventHandler;
  // lift state for form data
  setFormData: React.Dispatch<any>;
}

/**
 * Component that renders an individual class member form field
 */
export const ClassField: React.FC<FieldProps> = ({
  fieldMetadata,
  setFormData,
  registerFormEventHandler,
}: FieldProps) => {
  const fieldType = fieldMetadata.propertyType.toLowerCase();
  const renderComponent = () => {
    let component = <p>component {fieldType} not found</p>;
    if (fieldType === "date") {
      component = (
        <InputField
          fieldMetadata={fieldMetadata}
          inputType={fieldType}
          setFormData={setFormData}
        />
      );
    } else if (fieldType === "string") {
      component = (
        <InputField
          fieldMetadata={fieldMetadata}
          inputType={fieldType}
          setFormData={setFormData}
        />
      );
    } else if (fieldType === "number") {
      component = (
        <InputField
          fieldMetadata={fieldMetadata}
          inputType={fieldType}
          setFormData={setFormData}
        />
      );
    } else if (fieldType === "array") {
      throw new NotImplementedError("Array fields");
    } else {
      // if the field type is a class, check if form data is available for it
      const childFormMetadata = getMetadataStorage().getFormMetadata(fieldType);
      // if there is, render the associated class form
      if (childFormMetadata) {
        component = (
          <ClassFormUnit
            target={childFormMetadata.target}
            registerFormSubmission={registerFormEventHandler}
            setParentFormData={setFormData}
            parentFormDataPropertyKey={fieldMetadata.propertyKey}
          />
        );
        // else, throw error
      } else {
        throw new MemberClassError(
          `no metadata found for member type ${fieldType}`
        );
      }
    }
    return component;
  };
  return <>{renderComponent()}</>;
};
