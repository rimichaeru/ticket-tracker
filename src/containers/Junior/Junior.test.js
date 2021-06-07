import React from "react";
import { render } from "@testing-library/react";
import Junior from "./Junior";

describe("Junior tests", () => {
  it("should render", () => {
    expect(render(<Junior />)).toBeTruthy();
  });
});
