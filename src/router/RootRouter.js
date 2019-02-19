import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../modules/home/pages/HomePage";
import HistorySection from "../modules/History/history";
import EventExplorer from "../modules/EventExplorer/eventExplorer";
import CalenderSection from "../modules/Calender/calender";

const RootRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/not-found" render={() => <h1>Page Not Found</h1>} />
    <Route path="/history" component={HistorySection} />
    <Route path="/eventExp" component={EventExplorer} />
    <Route path="/calender" component={CalenderSection} />
  </Switch>
);

export default RootRouter;
