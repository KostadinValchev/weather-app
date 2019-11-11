import React from "react";
import Table from "./../common/table/table";

const HourlyForecast = props => {
  const forecastByHours = props.info[0].dayData;
  return <Table forecastByHours={forecastByHours} />;
};

export default HourlyForecast;
