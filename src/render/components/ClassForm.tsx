import React, { useState } from "react";
import { getMetadataStorage } from "../../globals";
import { ClassFormUnit } from "./ClassFormUnit";

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

  // store child submission handlers
  const [childSubmissionHandlers, setChildSubmissionHandlers] = useState({});

  // helper function for form submission
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submission pressed");
    for (let key in childSubmissionHandlers) {
      childSubmissionHandlers[key]();
    }
  };

  // register form submission from child form
  const registerFormEventHandler = (name, submitHandler) => {
    setChildSubmissionHandlers((prev) => {
      return { ...prev, ...{ [name]: submitHandler } };
    });
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
