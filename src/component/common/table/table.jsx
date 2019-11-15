import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { white } from "./constants";

const Table = ({ forecastByHours }) => {
  return (
    <div
      className="table-responsive"
      style={{ backgroundColor: white, margin: "3%" }}
    >
      <table
        className="table table-bordered"
        style={{ backgroundColor: "#212529", color: "#28a745", margin: 0 }}
      >
        <TableHeader forecastByHours={forecastByHours} />
        <TableBody forecastByHours={forecastByHours} />
      </table>
    </div>
  );
};

export default Table;
