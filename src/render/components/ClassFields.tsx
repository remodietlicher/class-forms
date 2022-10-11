import React, { useState } from "react";
import { getMetadataStorage } from "../../globals";
import { RegisterFormEventHandler } from "../RegisterFormEventHandler";
import { ClassField } from "./ClassField";

interface ClassFieldProps {
  // target class of this component
  target: Function;
  // function to register this class in form submission
  registerFormEventHandler: RegisterFormEventHandler;
  // lift state for form data
  setFormData: React.Dispatch<any>;
}

/**
 * Renders the individual member fields for a given class
 * based on the field metadata it receives
 */
export const ClassFields: React.FC<ClassFieldProps> = ({
  target,
  setFormData,
  registerFormEventHandler,
}: ClassFieldProps) => {
  // get field metadata by target class
  const fieldMetadatas = getMetadataStorage().getFieldMetadatas(target);

  const fields = fieldMetadatas?.map((f) => {
    return (
      <ClassField
        key={`ClassField_${f.target.name}_${f.propertyKey}`}
        fieldMetadata={f}
        registerFormEventHandler={registerFormEventHandler}
        setFormData={setFormData}
      />
    );
  });
  return <>{fields}</>;
};
