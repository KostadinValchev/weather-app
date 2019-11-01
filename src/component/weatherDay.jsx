import React from "react";
import Table from "./table";
import { temperatureCalculation } from "./common/temperatureController";
import "./weatherDay.css";

const WeatherDay = ({
  info,
  cityName,
  country,
  onDaySelected,
  dayOfWeek,
  dayName,
  isSelected
}) => {
  const minTemperature = temperatureCalculation(info.dayData, "min");
  const maxTemperature = temperatureCalculation(info.dayData, "max");
  const date = info.dayData[0].dt_txt.substring(0, 10);
  const weatherIcon = info.dayData[0].weather[0].icon.replace(/.$/, "d");
  let classes = "";

  if (isSelected) {
    if (info.name !== dayName) {
      classes = " selected";
    }
  }

  return (
    <div
      className={"col col-2dot4 col-sm-2dot4 col-md-2dot4 grow" + classes}
      id="grow"
      onClick={() => onDaySelected(dayOfWeek)}
    >
      <div className="card mb-4 shadow-sm">
        <h2>{info.name}</h2>
        <p>
          Weather in <b>{cityName}</b>, {country}
        </p>
        <p className="dateList">{date}</p>
        <h3 className="weather-widget__temperature text-center">
          <img
            className="weather-widget__img"
            src={"https://openweathermap.org/img/w/" + weatherIcon + ".png"}
            alt="Weather London , GB"
            width="100"
            height="90"
          />
        </h3>
        <p>
          Min: <b>{Math.round(minTemperature)} °C</b>&nbsp; Max:{" "}
          <b>{Math.round(maxTemperature)} °C</b>
        </p>
        <Table info={info} />
      </div>
    </div>
  );
};

export default WeatherDay;
