import React from "react";
import { FieldMetadata } from "../../metadata/FieldMetadata";

import { ObjectDateField } from "./ObjectDateField";
import { ObjectTextField } from "./ObjectTextField";

export interface FieldProps {
  fieldMeta: FieldMetadata;
}

export const ObjectField: React.FC<FieldProps> = ({
  fieldMeta,
}: FieldProps) => {
  const renderComponent = () => {
    switch (fieldMeta.fieldType.toLocaleLowerCase()) {
      case "date":
        return <ObjectDateField fieldMeta={fieldMeta} />;
      default:
        return <ObjectTextField fieldMeta={fieldMeta} />;
    }
  };
  return <>{renderComponent()}</>;
};
