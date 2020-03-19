import React from "react";
import PieChart from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NewPieChart = () => {
  const state = useSelector(state => state);

  console.log("@@@@@@@", state);

  return (
    <WrapperDiv>
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
    </WrapperDiv>
  );
};

export default NewPieChart;
