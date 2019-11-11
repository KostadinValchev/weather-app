import React from "react";

const TableBody = ({ forecastByHours }) => {
  return (
    <tbody className="text-center">
      <tr>
        {forecastByHours.map(hour => {
          const icon = hour.weather[0].icon.replace(/.$/, "d");
          return (
            <td key={hour.dt}>
              <img
                className="weather-widget__img"
                src={"https://openweathermap.org/img/w/" + icon + ".png"}
                alt="Weather London , GB"
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
            <h2>{Math.round(hour.main.temp)} °C</h2>
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
          <td key={hour.dt}>{hour.wind.speed} m/s</td>
        ))}
      </tr>
    </tbody>
  );
};

export default TableBody;
