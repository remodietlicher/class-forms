import React, { ReactElement } from "react";
import { getMetadataStorage } from "../../globals";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ClassForm } from "./ClassForm";

import { DateField } from "./DateField";
import { TextField } from "./TextField";

export interface FieldProps {
  fieldMetadata: FieldMetadata;
}

export const ClassField: React.FC<FieldProps> = ({
  fieldMetadata,
}: FieldProps) => {
  const fieldType = fieldMetadata.propertyType.toLowerCase();
  const renderComponent = () => {
    let component = <TextField fieldMetadata={fieldMetadata} />;
    if (fieldType === "date") {
      component = <DateField fieldMetadata={fieldMetadata} />;
    } else if (fieldType === "string") {
      component = <TextField fieldMetadata={fieldMetadata} />;
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
