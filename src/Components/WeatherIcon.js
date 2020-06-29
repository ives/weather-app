import React from "react";

export const WeatherIcon = ({ iconData }) => {
  return (
    <div>
      <span>
        <img
          src={`http://openweathermap.org/img/wn/${iconData.icon}.png`}
          alt={iconData.description}
        />
      </span>
      <span></span>
    </div>
  );
};
