import React from "react";

const selectedDay = props => {
  const hours = props.info[0].dayData;
  return (
    <table
      className="table table-bordered"
      style={{ backgroundColor: "white" }}
    >
      <thead className="text-center">
        <tr>
          {hours.map(h => (
            <th key={h.dt_txt}>{h.dt_txt.substring(10, 16)}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          {hours.map(hour => {
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
          {hours.map(hour => (
            <td key={hour.dt}>
              <h2>{Math.round(hour.main.temp)} °C</h2>
            </td>
          ))}
        </tr>
        <tr>
          {hours.map(hour => (
            <td key={hour.dt}>{hour.weather[0].description}</td>
          ))}
        </tr>
        <tr>
          {hours.map(hour => (
            <td key={hour.dt}>{hour.wind.speed} m/s</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default selectedDay;
