import React from "react";
import { render } from "@testing-library/react";
import TicketCard from "./TicketCard";

describe("TicketCard tests", () => {
  it("should render", () => {
    expect(render(<TicketCard />)).toBeTruthy();
  });
});
