import React from "react";
import { hectopascal, px } from "./constants";
import { percentage } from "../../../globalConstants";

const MainTableForecast = ({ info }) => {
  const data = info.dayData[0];

  return (
    <table className="table table-striped" style={{ height: 240 + { px } }}>
      <tbody>
        <tr>
          <td>Wind</td>
          <td>
            {data.wind.speed} {}
          </td>
        </tr>
        <tr>
          <td>{data.weather[0].main}</td>
          <td>{data.weather[0].description}</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>
            {data.main.pressure} {hectopascal}
          </td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>
            {data.main.humidity} {percentage}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MainTableForecast;
