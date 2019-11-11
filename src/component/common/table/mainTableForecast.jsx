import React from "react";

const MainTableForecast = ({ info }) => {
  const data = info.dayData[0];

  return (
    <table className="table table-striped" style={{ height: 240 + "px" }}>
      <tbody>
        <tr>
          <td>Wind</td>
          <td>{data.wind.speed} m/s</td>
        </tr>
        <tr>
          <td>{data.weather[0].main}</td>
          <td>{data.weather[0].description}</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{data.main.pressure} hpa</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{data.main.humidity} %</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MainTableForecast;
