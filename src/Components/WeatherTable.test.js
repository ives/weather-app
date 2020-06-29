import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherTable } from "./WeatherTable";

const apiData = [
  {
    dt: 1593453600,
    main: {
      temp: 289.94,
      feels_like: 284.65,
      temp_min: 289.25,
      temp_max: 289.94,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 1007,
      humidity: 55,
      temp_kf: 0.69,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
  },
];

describe("WeatherTable Component", () => {

  test("Renders Weather Icon when ON", () => {
    render(<WeatherTable apiData={apiData} showIcons={true} />);
    
    expect(screen.getByText("Temperature")).toBeInTheDocument();

    // Weather Icon
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('overcast clouds')).toBeInTheDocument();
    
  });

  test("IGNORES Weather Icon when OFF", () => {
    render(<WeatherTable apiData={apiData} showIcons={false} />);

    expect(screen.getByText("Temperature")).toBeInTheDocument();

    // No Weather Icon
    
    expect(screen.queryByAltText('overcast clouds')).not.toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    
  });  
});
