import React, { useEffect, useState } from "react";
import { MemberClassError } from "../../error/MemberClassError";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ClassInputComponent } from "./ClassInputComponent";

interface ClassSelectProps {
  fieldMetadatas: FieldMetadata[];
  valueFetcher: () => Promise<any[]>;
}

const ADD_NEW_TEXT = "add...";

/**
 * This component renders pre-loaded class data to choose from or
 * create new if needed
 */
export const ClassSelectComponent: React.FC<ClassSelectProps> = ({
  fieldMetadatas,
  valueFetcher,
}: ClassSelectProps) => {
  const [classOptions, setClassOptions] = useState([ADD_NEW_TEXT]);
  const [selectedClass, setSelectedClass] = useState(ADD_NEW_TEXT);

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
    const fetchClassOptions = async (f: () => Promise<any[]>) => {
      const availableObjects = await f();
      const tmp = availableObjects.map((o) => o[primaryField[0].propertyKey]);
      setClassOptions([ADD_NEW_TEXT, ...tmp]);
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
        <ClassInputComponent fieldMetadatas={fieldMetadatas} />
      )}
    </>
  );
};
