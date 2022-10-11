import React, { useState } from "react";
import { getMetadataStorage } from "../../globals";
import { ClassFields } from "./ClassFields";
import { ClassFormUnit } from "./ClassFormUnit";
import { ClassSelector } from "./ClassSelector";

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

  // store child submission handles
  const [childSubmissionHandlers, setChildSubmissionHandlers] = useState<
    typeof onSubmitHandler[]
  >([]);

  // helper function for form submission
  const onSubmitHandler = (e) => {
    e.preventDefault();
    formMetadata.onSubmitHandler({ dummy: "data" });
  };

  // register form submission from child form
  const registerFormEventHandler = (submitHandler) => {
    setChildSubmissionHandlers((previousState) => [
      ...previousState,
      submitHandler,
    ]);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <ClassFormUnit
        target={target}
        registerFormSubmission={registerFormEventHandler}
      />
      <button type="submit">submit</button>
    </form>
  );
};
