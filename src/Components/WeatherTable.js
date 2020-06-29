import React from "react";
import { WeatherIcon } from "./WeatherIcon";
import { kelvinToCelcius as celcius, prettyDate } from "../utils/";

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const WeatherTable = ({ apiData, showIcons }) => {

  const rows = apiData.map((item) => (
    <TableRow key={item.dt}>
      <TableCell>{ prettyDate(item.dt) }</TableCell>
      <TableCell>
        {showIcons && <WeatherIcon iconData={item.weather[0]} />}
      </TableCell>
      <TableCell>{celcius(item.main.temp)}&deg;</TableCell>
      <TableCell>{celcius(item.main.feels_like)}&deg;</TableCell>
      <TableCell>{celcius(item.main.temp_min)}&deg;</TableCell>
      <TableCell>{celcius(item.main.temp_max)}&deg;</TableCell>
      <TableCell>{item.main.humidity}%</TableCell>
    </TableRow>
  ));

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell style={{ minWidth: 110 }}>Date</TableCell>
          <TableCell>&nbsp;</TableCell>
          <TableCell>Temperature</TableCell>
          <TableCell>Feels Like</TableCell>
          <TableCell>Min</TableCell>
          <TableCell>Max</TableCell>
          <TableCell>Humidity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
      </Table>
  );
};
