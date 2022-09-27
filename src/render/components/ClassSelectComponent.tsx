import React, { useEffect, useState } from "react";
import { MemberClassError } from "../../error/MemberClassError";
import { FieldMetadata } from "../../metadata/FieldMetadata";
import { ClassInputComponent } from "./ClassInputComponent";

interface ClassSelectProps {
  fieldMetadatas: FieldMetadata[];
  valueFetcher: () => Promise<any[]>;
}

const ADD_NEW_TEXT = "add...";

export const ClassSelectComponent: React.FC<ClassSelectProps> = ({
  fieldMetadatas,
  valueFetcher,
}: ClassSelectProps) => {
  const [classOptions, setClassOptions] = useState([ADD_NEW_TEXT]);
  const [selectedClass, setSelectedClass] = useState(ADD_NEW_TEXT);

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
