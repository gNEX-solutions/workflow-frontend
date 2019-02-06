import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import login from '../modules/login/pages/Login'

const RootRouter = () => (
  <Switch>
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    {/* <Route exact path="/" component={ProductList} /> */}
    <Route path="/login" component={login} />
    <Route path="/not-found" render={() => <h1>Page Not Found</h1>} />
  </Switch>

);

export default RootRouter;