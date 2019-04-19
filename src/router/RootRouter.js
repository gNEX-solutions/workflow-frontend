import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../modules/home/pages/HomePage";
import HistorySection from "../modules/history/history";
import EventExplorer from "../modules/eventExplorer/eventExplorer";
import CalenderSection from "../modules/calender/calender";
import DeleteDialogBox from "../shared/deleteDialogBox/deleteDialogBox";
const RootRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/not-found" render={() => <h1>Page Not Found</h1>} />
    <Route path="/history" component={HistorySection} />
    <Route path="/eventExp" component={EventExplorer} />
    <Route path="/calender" component={CalenderSection} />
    <Route path="/delete" component={DeleteDialogBox} />
  </Switch>
);

export default RootRouter;
