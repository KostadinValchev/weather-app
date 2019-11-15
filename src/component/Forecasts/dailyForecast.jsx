import React from "react";
import MainTableForecast from "../common/table/mainTableForecast";
import { temperatureCalculation } from "../../utility/temperatureController";
import { buildingAnUrlImageString } from "../../utility/stringBuilder";
import { selected } from "./constants";
import { min, max, degreesCelsius } from "../../globalConstants";
import "./dailyForecast.css";

const DailyForecast = ({
  info,
  cityName,
  country,
  onDaySelected,
  dayOfWeek,
  dayName,
  isSelected
}) => {
  const minTemperature = temperatureCalculation(info.dayData, min);
  const maxTemperature = temperatureCalculation(info.dayData, max);
  const date = info.dayData[0].dt_txt.substring(0, 10);
  let classes = "";

  if (isSelected) {
    if (info.name !== dayName) {
      classes = selected;
    }
  }

  return (
    <div
      className={"col col-2dot4 col-sm-2dot4 col-md-2dot4 grow" + classes}
      id="grow"
      onClick={() => onDaySelected(dayOfWeek)}
    >
      <div className="card mb-4 shadow-sm" id="card">
        <h2>{info.name}</h2>
        <p>
          Weather in <b>{cityName}</b>, {country}
        </p>
        <p className="dateList">{date}</p>
        <h3 className="weather-widget__temperature text-center">
          <img
            className="weather-widget__img"
            src={buildingAnUrlImageString(info.dayData[0].weather[0].icon)}
            alt="Weather"
            width="100"
            height="90"
          />
        </h3>
        <p>
          Min:{" "}
          <b>
            {Math.round(minTemperature)} {degreesCelsius}
          </b>
          &nbsp; Max:{" "}
          <b>
            {Math.round(maxTemperature)} {degreesCelsius}
          </b>
        </p>
        <MainTableForecast info={info} />
      </div>
    </div>
  );
};

export default DailyForecast;
