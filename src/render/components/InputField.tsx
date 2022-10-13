import React, { useState } from "react";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { LiteralFieldType } from "../LiteralFieldType";

interface InputFieldProps {
  // decorator metadata for this field
  fieldMetadata: FieldMetadata;
  // union of supported input types
  inputType: LiteralFieldType;
  // lift state for form data
  setFormData: React.Dispatch<any>;
}

/**
 * Wrapper component for the HTML `input` element
 */
export const InputField: React.FC<InputFieldProps> = ({
  fieldMetadata,
  inputType,
  setFormData,
}: InputFieldProps) => {
  // capture user input
  const [input, setInput] = useState<string>("");

  // handle input events
  const inputEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // propagate form values when this field loses focus
  const handleBlurEvent = (e: React.FocusEvent) => {
    console.log(`setting form data with ${input}`);
    setFormData((prev) => {
      const newKey = { [fieldMetadata.propertyKey]: input };
      return { ...prev, ...newKey };
    });
  };

  return (
    <>
      <label>
        {fieldMetadata.propertyKey}
        <input
          type={inputType}
          value={input}
          onChange={inputEventHandler}
          onBlur={handleBlurEvent}
        />
      </label>
    </>
  );
};
