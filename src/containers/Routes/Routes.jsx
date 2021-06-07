import React from "react";
import styles from "./Routes.module.scss";
import Developer from "../Developer";
import Junior from "../Junior";
import Home from "../Home";
import Other from "../Other";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/developer"><Developer /></Route>
      <Route path="/junior"><Junior /></Route>
      <Route path="/other"><Other /></Route>
    </Switch>
  );
};

export default Routes;
