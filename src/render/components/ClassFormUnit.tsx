import React, { useEffect, useState } from "react";
import { getMetadataStorage } from "../../globals";
import { ClassFields } from "./ClassFields";
import { ClassSelector } from "./ClassSelector";

interface ClassFormUnitProps {
  // class constructor associated with the form
  target: Function;
  // function to register this class in form submission
  registerFormSubmission: any;
  // additional parameters passed to the value fetcher
  valueFetcherOptions?: any;
  // for nested class forms, pass down the parent's form setter method
  setParentFormData?: React.Dispatch<any>;
  // the name of the parent's nesting member
  parentFormDataPropertyKey?: string;
}

/**
 * Renders all fields for a class annotated with a Form decorator.
 * @note
 * This component is used recursively.
 */
export const ClassFormUnit: React.FC<ClassFormUnitProps> = ({
  target,
  registerFormSubmission,
  valueFetcherOptions,
  setParentFormData,
  parentFormDataPropertyKey,
}: ClassFormUnitProps) => {
  const formMetadata = getMetadataStorage().getFormMetadata(target);
  const fieldMetadatas = getMetadataStorage().getFieldMetadatas(target);

  // set data template
  let formDataTemplate: any = {};
  fieldMetadatas.map((f) => {
    formDataTemplate[f.propertyKey] = undefined;
  });

  // store input for all fields
  const [formData, setFormData] = useState(formDataTemplate);

  // link this form data to it's parent
  if (setParentFormData && parentFormDataPropertyKey) {
    useEffect(() => {
      setParentFormData((prev) => {
        return { ...prev, ...{ [parentFormDataPropertyKey]: formData } };
      });
    }, [formData]);
  }

  let classComponent;
  // get class data from database if a fetcher is given
  if (formMetadata.options?.valueFetcher) {
    classComponent = (
      <ClassSelector
        target={target}
        registerFormEventHandler={registerFormSubmission}
        setFormData={setFormData}
        valueFetcher={formMetadata.options.valueFetcher}
        valueFetcherOptions={valueFetcherOptions}
      />
    );
  } else {
    // render input fields for class data
    classComponent = (
      <ClassFields
        target={target}
        registerFormEventHandler={registerFormSubmission}
        setFormData={setFormData}
      />
    );
  }

  console.log(`Form data changed, its now:`);
  console.log(formData);

  return (
    <div key={`fragment_${formMetadata?.target.name}`}>
      <h1>{formMetadata?.target.name}</h1>
      {classComponent}
    </div>
  );
};
