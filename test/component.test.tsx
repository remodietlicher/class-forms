import React from "react";
import { render } from "@testing-library/react";
import { ClassForm } from "../src/render/components/ClassForm";
import { ParentClass } from "./classes/ParentClass";
import { ComprehensiveClass } from "./classes/ComprehensiveClass";

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
});
