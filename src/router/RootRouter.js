import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../modules/login/pages/Login';
import HomePage from '../modules/home/pages/HomePage';
import HistorySection from "../modules/history/history";
import EventExplorer from "../modules/eventExplorer/eventExplorer";
import CalenderSection from "../modules/calender/calender";

import RequireAuth from './RequireAuth';

const RootRouter = () => (
  <Switch>
    <Route exact path="/" component={RequireAuth(HomePage)} />
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    <Route path="/login" component={Login} />
    {/* <Route path="/signup" component={Signup} /> */}
    <Route path="/history" component={HistorySection} />
    <Route path="/eventExp" component={EventExplorer} />
    <Route path="/calender" component={CalenderSection} />
    <Route path="/not-found" render={() => <h1> Page Not Found </h1>} />
  </Switch>
);

export default RootRouter;

