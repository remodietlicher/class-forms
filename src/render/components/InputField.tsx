import React from "react";
import { FieldMetadata } from "../../metadata/FieldMetadata";

interface InputFieldProps {
  fieldMetadata: FieldMetadata;
  inputType: "date" | "string" | "number";
}

/**
 * Wrapper component for the HTML `input` element
 */
export const InputField: React.FC<InputFieldProps> = ({
  fieldMetadata,
  inputType,
}: InputFieldProps) => {
  return (
    <>
      <label>
        {fieldMetadata.propertyKey}
        <input type={inputType} />
      </label>
    </>
  );
};
