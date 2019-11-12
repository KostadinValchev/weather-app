import React from "react";
import { correctDateExpression } from "../../../utility/stringBuilder";
const TableHeader = ({ forecastByHours }) => {
  return (
    <thead className="text-center">
      <tr>
        {forecastByHours.map(h => (
          <th key={h.dt_txt}>{correctDateExpression(h.dt_txt)}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
