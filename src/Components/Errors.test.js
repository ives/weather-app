import React from "react";
import { render, screen } from "@testing-library/react";
import { Errors } from "./Errors";

const sampleErrorMsg = "Some Error Message";

describe("Errors Component", () => {

  test("Renders correct test", () => {
    render(<Errors message={sampleErrorMsg} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Error:/)).toBeInTheDocument();
    expect(screen.getByText('Some Error Message')).toBeInTheDocument();
  });
});
