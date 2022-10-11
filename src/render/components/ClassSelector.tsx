import React, { useEffect, useState } from "react";
import { MemberClassError } from "../../error/MemberClassError";
import { getMetadataStorage } from "../../globals";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ValueFetcherType } from "../../metadata/options/FormMetadataOptions";
import { FormEventHandler } from "../FormEventHandler";
import { RegisterFormEventHandler } from "../RegisterFormEventHandler";
import { ClassFields } from "./ClassFields";

/**
 * Properties passed to the {@link ClassSelector} component
 */
interface ClassSelectorProps {
  // target class of this component
  target: Function;
  // function to register this class in form submission
  registerFormEventHandler: RegisterFormEventHandler;
  // lift state for form data
  setFormData: React.Dispatch<any>;
  // function to fetch class objects that are already available
  valueFetcher: ValueFetcherType;
  // additional parameters passed to the value fetcher
  valueFetcherOptions?: any;
}

const ADD_NEW_TEXT = "add...";

/**
 * This component renders pre-loaded class data to choose from or
 * create new if needed
 */
export const ClassSelector: React.FC<ClassSelectorProps> = ({
  target,
  registerFormEventHandler,
  setFormData,
  valueFetcher,
  valueFetcherOptions,
}: ClassSelectorProps) => {
  const [classOptions, setClassOptions] = useState([ADD_NEW_TEXT]);
  const [selectedClass, setSelectedClass] = useState(ADD_NEW_TEXT);

  // get field metadata by target class
  const fieldMetadatas = getMetadataStorage().getFieldMetadatas(target);

  // if a class provides a fetch function, it also must provide a primary key
  // to be identified by
  const primaryField = fieldMetadatas.filter((f) => f.options?.primary);

  if (!primaryField || primaryField.length === 0) {
    throw new MemberClassError(
      "No class member is set as primary but a value fetcher has been provided."
    );
  }
  if (primaryField.length > 1) {
    throw new MemberClassError(
      `Multiple fields have been defined as 'primary' for class ${primaryField[0].target.name}`
    );
  }

  const classSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(event.target.value);
  };

  // load avaliable class data, potentially asynchronously from database
  useEffect(() => {
    const fetchClassOptions = async (f: ValueFetcherType) => {
      const availableObjects = await f(valueFetcherOptions);
      if (availableObjects) {
        const tmp = availableObjects?.map(
          (o) => o[primaryField[0].propertyKey]
        );
        setClassOptions([ADD_NEW_TEXT, ...tmp]);
      }
    };
    fetchClassOptions(valueFetcher);
  }, []);

  return (
    <>
      <select value={selectedClass} onChange={classSelectHandler}>
        {classOptions.map((o) => (
          <option key={`option_${o}`} value={o}>
            {o}
          </option>
        ))}
      </select>
      {selectedClass === ADD_NEW_TEXT && (
        <ClassFields
          target={target}
          registerFormEventHandler={registerFormEventHandler}
          setFormData={setFormData}
        />
      )}
    </>
  );
};
