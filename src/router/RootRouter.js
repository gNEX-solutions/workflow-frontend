import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from '../modules/login/pages/Login';

const RootRouter = () => (
  <Switch>
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    {/* <Route exact path="/" component={ProductList} /> */}
    <Route path="/login" component={Login} />
    {/* <Route path="/signup" component={Signup} /> */}
    <Route path="/not-found" render={() => <h1>Page Not Found</h1>} />
  </Switch>
);

export default RootRouter;
