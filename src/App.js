import React from "react";
import Shows from "./components/Shows";
import { Switch, Route } from "react-router";
import OneShowInfo from "./components/OneShowInfo";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Shows} />
    <Route path="/oneShowInfo/:id" component={OneShowInfo} />
    <Route path="/series/:id" component={OneShowInfo} />
  </Switch>
);

export default App;
