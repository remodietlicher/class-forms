import React from "react";
import { FieldProps } from "./ClassField";

export const DateField: React.FC<FieldProps> = ({
  fieldMetadata: fieldMetadata,
}: FieldProps) => {
  return (
    <>
      <label
        key={`label_${fieldMetadata.propertyKey}_${fieldMetadata.target.name}`}
      >
        {fieldMetadata.propertyKey}
        <input
          key={`input_${fieldMetadata.propertyKey}_${fieldMetadata.target.name}`}
          type="date"
        />
      </label>
    </>
  );
};
