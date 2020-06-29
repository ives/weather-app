import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherIcon } from "./WeatherIcon";

const iconData = {
  id: 804,
  main: "Clouds",
  description: "overcast clouds",
  icon: "04d",
};

describe("WeatherIcon Component", () => {

  test("Renders correct image based on API data", () => {
    render(<WeatherIcon iconData={iconData} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('overcast clouds')).toBeInTheDocument();
  });
});
