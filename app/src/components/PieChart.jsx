import React from "react";
import PieChart from "react-minimal-pie-chart";
import { useSelector } from "react-redux";

const NewPieChart = () => {
  const state = useSelector(state => state);

  console.log("@@@@@@@", state);

  return (
    <div>
      <PieChart
        data={[
          {
            title: "Total Deaths",
            value: state.countryData[0].TotalDeaths,
            color: "#fa8072"
          },
          {
            title: "Total Recovered",
            value: state.countryData[0].TotalRecovered,
            color: "#8fbc8f"
          }
        ]}
      />
    </div>
  );
};

export default NewPieChart;
