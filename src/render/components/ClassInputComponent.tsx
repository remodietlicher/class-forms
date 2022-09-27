import React from "react";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ClassField } from "./ClassField";

interface ClassInputProps {
  fieldMetadatas: FieldMetadata[];
}

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
