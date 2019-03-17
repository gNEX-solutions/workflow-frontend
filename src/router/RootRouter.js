import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from '../modules/login/pages/Login';
import HomePage from '../modules/home/pages/HomePage';

import RequireAuth from './RequireAuth';

const RootRouter = () => (
  <Switch>
    <Route exact path="/" component={RequireAuth(HomePage)} />
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    <Route path="/login" component={Login} />
    {/* <Route path="/signup" component={Signup} /> */}
    <Route path="/not-found" render={() => <h1> Page Not Found </h1>} />
  </Switch>
);

export default RootRouter;
