import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "../modules/home/pages/HomePage";
import HistorySection from "../modules/HistorySection/main";

const RootRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/not-found" render={() => <h1>Page Not Found</h1>} />
    <Route path="/history" component={HistorySection} />
  </Switch>
);

export default RootRouter;
