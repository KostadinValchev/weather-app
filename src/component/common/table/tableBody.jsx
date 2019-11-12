import React from "react";
import { metersPerSecond } from "./constants";
import { degreesCelsius } from "../../../globalConstants";
import { buildingAnUrlImageString } from "../../../utility/stringBuilder";

const TableBody = ({ forecastByHours }) => {
  return (
    <tbody className="text-center">
      <tr>
        {forecastByHours.map(hour => {
          return (
            <td key={hour.dt}>
              <img
                className="weather-widget__img"
                src={buildingAnUrlImageString(hour.weather[0].icon)}
                alt="Weather"
                width="100"
                height="90"
              />
            </td>
          );
        })}
      </tr>
      <tr>
        {forecastByHours.map(hour => (
          <td key={hour.dt}>
            <h2>
              {Math.round(hour.main.temp)} {degreesCelsius}
            </h2>
          </td>
        ))}
      </tr>
      <tr>
        {forecastByHours.map(hour => (
          <td key={hour.dt}>{hour.weather[0].description}</td>
        ))}
      </tr>
      <tr>
        {forecastByHours.map(hour => (
          <td key={hour.dt}>
            {hour.wind.speed} {metersPerSecond}
          </td>
        ))}
      </tr>
    </tbody>
  );
};

export default TableBody;
