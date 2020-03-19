import React from "react";
import "./App.css";
import StatusPage from "./components/StatusPage";
import NewPieChart from "./components/PieChart";
import { Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";

const NewNav = styled.nav`
  margin: 2%;
`;

function App() {
  return (
    <div className="App">
      <h1>COVID-19 STATUS</h1>
      <NewNav>
        <Link to="/">Home</Link>
      </NewNav>
      <Route exact path="/">
        <SearchForm />
        <StatusPage />
      </Route>
      <Route path="/chart">
        <NewPieChart />
      </Route>
    </div>
  );
}

export default App;
