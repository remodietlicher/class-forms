import React, { useState } from "react";
import { getMetadataStorage } from "../../globals";
import { ClassFormUnit } from "./ClassFormUnit";

interface FormProps {
  // class constructor associated with the form
  target: Function;
}

/**
 * Main entrypoint to render class forms.
 * Renders classes (and their member classes if present) as HTML forms
 * @remark
 * This class can be used recursively. Any nested ClassForm must be declared
 * with isChild (setting `isChild=true`)
 */
export const ClassForm: React.FC<FormProps> = ({ target }: FormProps) => {
  const formMetadata = getMetadataStorage().getFormMetadata(target);

  // store child submission handlers
  const [childSubmissionHandlers, setChildSubmissionHandlers] = useState({});

  // helper function for form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("submission pressed");
    for (let key in childSubmissionHandlers) {
      await childSubmissionHandlers[key]();
    }
  };

  // register form submission from child form
  // The handlers are stored by name of the child class
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
