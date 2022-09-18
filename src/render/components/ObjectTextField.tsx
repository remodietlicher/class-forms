import React from "react";
import { FieldProps } from "./ObjectField";

export const ObjectTextField: React.FC<FieldProps> = ({
  fieldMeta,
}: FieldProps) => {
  return (
    <>
      <label key={`label_${fieldMeta.name}_${fieldMeta.target.name}`}>
        {fieldMeta.name}
        <input
          key={`input_${fieldMeta.name}_${fieldMeta.target.name}`}
          type="text"
        />
      </label>
    </>
  );
};
