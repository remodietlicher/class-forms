import React from "react";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ClassField } from "./ClassField";

interface ClassInputProps {
  fieldMetadatas: FieldMetadata[];
}

/**
 * Renders the individual member fields for a given class
 * based on the field metadata it receives
 */
export const ClassInputComponent: React.FC<ClassInputProps> = ({
  fieldMetadatas,
}: ClassInputProps) => {
  const fields = fieldMetadatas?.map((f) => {
    return (
      <ClassField
        key={`ClassField_${f.target.name}_${f.propertyKey}`}
        fieldMetadata={f}
      />
    );
  });
  return <>{fields}</>;
};
