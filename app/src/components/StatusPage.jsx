import React, { useEffect } from "react";
import { fetchData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setCountry } from "../actions";

const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContainerDiv = styled.div`
  width: 20%;
  border: 1px solid red;
  margin: 2.4%;
`;

const NewH2 = styled.h2`
  color: red;
`;

const GreenH2 = styled.h2`
  color: green;
`;

const StatusPage = () => {
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Link to="/chart">
      <WrapperDiv>
        {state.countryData.map(elem => (
          <ContainerDiv
            onClick={() => dispatch(setCountry(elem.Country))}
            key={Math.floor(Math.random() * 1100000)}
          >
            <h1>{elem.Country}</h1>
            <h3>Confirmed New: {elem.NewConfirmed}</h3>
            <h3>Total Confirmed: {elem.TotalConfirmed}</h3>
            <h3>New Deaths: {elem.NewDeaths}</h3>
            <NewH2>Total Deaths: {elem.TotalDeaths}</NewH2>
            <h2>New Recovered: {elem.NewRecovered}</h2>
            <GreenH2>Total Recovered: {elem.TotalRecovered}</GreenH2>
          </ContainerDiv>
        ))}
      </WrapperDiv>
    </Link>
  );
};

export default StatusPage;
