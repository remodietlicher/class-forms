import React from "react";
import { render } from "@testing-library/react";
import { ClassForm } from "../src/render/components/ClassForm";
import { ParentClass } from "./classes/ParentClass";
import { ComprehensiveClass } from "./classes/ComprehensiveClass";
import { FetchClass } from "./classes/FetchClasses";

describe("Class components", () => {
  it("should render nested classes", () => {
    const { queryByLabelText } = render(
      <ClassForm target={ParentClass} root={true} />
    );
    expect(queryByLabelText("member1")).toBeTruthy();
    expect(queryByLabelText("subMember1")).toBeTruthy();
  });
  it("should render basic input fields: date, string, number", () => {
    const { queryByLabelText } = render(
      <ClassForm target={ComprehensiveClass} root={true} />
    );
    expect(queryByLabelText("stringMember")).toBeTruthy();
    expect(queryByLabelText("numberMember")).toBeTruthy();
    expect(queryByLabelText("dateMember")).toBeTruthy();
  });
  // it("should allow to provide a set of objects fetched from remote", () => {
  //   const { queryByLabelText } = render(
  //     <ClassForm target={FetchClass} root={true} />
  //   );

  //   expect(queryByLabelText("alpha")).toBeTruthy();
  //   expect(queryByLabelText("beta")).toBeTruthy();
  //   expect(queryByLabelText("gamma")).toBeTruthy();
  //   expect(queryByLabelText("delta")).toBeTruthy();
  //   expect(queryByLabelText("epsilon")).toBeTruthy();
  //   expect(queryByLabelText("zeta")).toBeTruthy();
  // });
});
