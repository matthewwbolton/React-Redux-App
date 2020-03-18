import React from "react";
import "./App.css";
import StatusPage from "./components/StatusPage";
import NewPieChart from "./components/PieChart";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>COVID-19 STATUS: Recovered</h1>
      <Route exact path="/">
        <StatusPage />
      </Route>
      <Route path="/chart">
        <NewPieChart />
      </Route>
    </div>
  );
}

export default App;
