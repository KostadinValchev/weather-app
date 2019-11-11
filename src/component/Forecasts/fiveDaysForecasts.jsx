import React from "react";
import DailyForecast from "./dailyForecast";
import HourlyForecast from "./hourlyForecast";

const FiveDaysForecasts = ({
  data,
  cityName,
  country,
  selectedDay,
  onDaySelected
}) => {
  return (
    <div
      className="container"
      style={{ marginTop: 5 + "%", marginBottom: 5 + "%" }}
    >
      <div className="row">
        {data.map((day, index) => (
          <DailyForecast
            key={index}
            info={day}
            country={country}
            cityName={cityName}
            dayOfWeek={day.name}
            isSelected={selectedDay.isSelected ? true : false}
            dayName={selectedDay.isSelected ? selectedDay[0].name : ""}
            onDaySelected={onDaySelected}
          />
        ))}
      </div>
      {selectedDay.isSelected === true ? (
        <HourlyForecast info={selectedDay} />
      ) : null}
    </div>
  );
};

export default FiveDaysForecasts;
