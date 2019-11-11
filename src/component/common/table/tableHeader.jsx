import React from "react";

const TableHeader = ({ forecastByHours }) => {
  return (
    <thead className="text-center">
      <tr>
        {forecastByHours.map(h => (
          <th key={h.dt_txt}>{h.dt_txt.substring(10, 16)}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
