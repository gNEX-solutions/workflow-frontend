import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../modules/auth/pages/Auth';
import HomePage from '../modules/home/pages/HomePage';


// import RequireAuth from './RequireAuth';

export const VIEW_TYPES = {
  login: 1001,
  signUp: 1002,
  forgonPassword: 1003
};

const RootRouter = () => (
  <Switch>
    {/* <Route exact path="/dashboard" component={RequireAuth(HomePage)} /> */}
    <Route exact path="/dashboard" component={HomePage} />
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    {/* updated  the routing path */}
    <Route
      path="/"
      render={props => <Auth {...props} viewType={VIEW_TYPES.login} />}
    />
    <Route
      path="/signup"
      render={props => <Auth {...props} viewType={VIEW_TYPES.signUp} />}
    />
    {/* <Route path="/signup" component={Signup} /> */}

    <Route path="/not-found" render={() => <h1> Page Not Found </h1>} />
  </Switch>
);

export default RootRouter;