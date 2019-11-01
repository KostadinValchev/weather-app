import React from "react";
import WeatherDay from "./weatherDay";
import CurrentDay from "./selectedDay";
 
const WeatherListDays = ({ data, cityName, country, selectedDay, onDaySelected }) => {
  return ( 
  <div
    className="container"
    style={{ marginTop: 5 + "%", marginBottom: 5 + "%" }}
  >
    <div className="row">
      {data.map((day, index) => (
        <WeatherDay
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
      <CurrentDay info={selectedDay} />
    ) : null}
  </div> );
}
 
export default WeatherListDays;
