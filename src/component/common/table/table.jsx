import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ forecastByHours }) => {
  return (
    <table
      className="table table-bordered"
      style={{ backgroundColor: "white" }}
    >
      <TableHeader forecastByHours={forecastByHours} />
      <TableBody forecastByHours={forecastByHours} />
    </table>
  );
};

export default Table;
