import React from "react";
import { MemberClassError } from "../../error/MemberClassError";
import { getMetadataStorage } from "../../globals";
import { ClassInputComponent } from "./ClassInputComponent";
import { ClassSelectComponent } from "./ClassSelectComponent";

interface FormProps {
  target: Function;
  root?: boolean;
}

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
