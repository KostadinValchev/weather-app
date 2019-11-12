import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { white } from "./constants";

const Table = ({ forecastByHours }) => {
  return (
    <div className="table-responsive" style={{ marginTop: "20px" }}>
      <table
        className="table table-bordered"
        style={{ backgroundColor: { white } }}
      >
        <TableHeader forecastByHours={forecastByHours} />
        <TableBody forecastByHours={forecastByHours} />
      </table>
    </div>
  );
};

export default Table;
