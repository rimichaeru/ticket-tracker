import React from "react";
import { render } from "@testing-library/react";
import Developer from "./Developer";

describe("Developer tests", () => {
  it("should render", () => {
    expect(render(<Developer />)).toBeTruthy();
  });
});
