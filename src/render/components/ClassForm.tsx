import React from "react";
import { getMetadataStorage } from "../../globals";
import { ClassInputComponent } from "./ClassInputComponent";
import { ClassSelectComponent } from "./ClassSelectComponent";

interface FormProps {
  // class constructor associated with the form
  target: Function;
  // set to `true` for top-level ClassForm
  isChild?: boolean;
  // additional parameters passed to the value fetcher
  valueFetcherOptions?: any;
}

/**
 * Main entrypoint to render class forms.
 * Renders classes (and their member classes if present) as HTML forms
 * @remark
 * This class can be used recursively. Any nested ClassForm must be declared
 * with isChild (setting `isChild=true`)
 */
export const ClassForm: React.FC<FormProps> = ({
  target,
  isChild,
  valueFetcherOptions,
}: FormProps) => {
  const formMetadata = getMetadataStorage().getFormMetadata(target);
  const fieldMetadatas = getMetadataStorage().getFieldMetadatas(target);

  let classComponent;

  if (formMetadata.options?.valueFetcher) {
    classComponent = (
      <ClassSelectComponent
        fieldMetadatas={fieldMetadatas}
        valueFetcher={formMetadata.options.valueFetcher}
        valueFetcherOptions={valueFetcherOptions}
      />
    );
  } else {
    classComponent = <ClassInputComponent fieldMetadatas={fieldMetadatas} />;
  }

  return (
    <div key={`fragment_${formMetadata?.target.name}`}>
      {!isChild ? (
        // render root Form
        <form>
          <h1>{formMetadata?.target.name}</h1>
          {classComponent}
        </form>
      ) : (
        <>
          <h1>{formMetadata?.target.name}</h1>
          {classComponent}
        </>
      )}
    </div>
  );
};
