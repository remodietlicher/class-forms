import React from "react";
import { getMetadataStorage } from "../../globals";
import { ClassInputComponent } from "./ClassInputComponent";
import { ClassSelectComponent } from "./ClassSelectComponent";

interface FormProps {
  // class constructor associated with the form
  target: Function;
  // set to `true` for top-level ClassForm
  root?: boolean;
}

/**
 * Main entrypoint to render class forms.
 * Renders classes (and their member classes if present) as HTML forms
 * @remark
 * This class is used recursively. The top-level ClassForm must be declared
 * as root (setting `root=true`)
 */
export const ClassForm: React.FC<FormProps> = ({ target, root }: FormProps) => {
  const formMetadata = getMetadataStorage().getFormMetadata(target);
  const fieldMetadatas = getMetadataStorage().getFieldMetadatas(target);

  return (
    <React.Fragment key={`fragment_${formMetadata?.target.name}`}>
      <h1>{formMetadata?.target.name}</h1>
      {root ? (
        <form>
          <ClassInputComponent fieldMetadatas={fieldMetadatas} />
        </form>
      ) : formMetadata.options?.valueFetcher ? (
        <ClassSelectComponent
          fieldMetadatas={fieldMetadatas}
          valueFetcher={formMetadata.options.valueFetcher}
        />
      ) : (
        <ClassInputComponent fieldMetadatas={fieldMetadatas} />
      )}
    </React.Fragment>
  );
};
