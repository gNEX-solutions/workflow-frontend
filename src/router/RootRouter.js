import React from "react";
import { Route, Switch } from "react-router-dom";
// import Login from '../modules/login/pages/Login';
import HomePage from "../modules/home/pages/HomePage";

const RootRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/not-found" render={() => <h1> Page Not Found </h1>} />
  </Switch>
);

export default RootRouter;
