import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../modules/login/pages/Login';
import HomePage from '../modules/home/pages/HomePage';
import HistorySection from '../modules/history/history';
import EventExplorer from '../modules/eventExplorer/eventExplorer';

import UserProfileSection from '../shared/userProfileSection/userProfileSection';
import ApprovalSection from '../shared/approval_section/approvalSectionComponent';

import RequireAuth from './RequireAuth';

const RootRouter = () => (
  <Switch>
    <Route exact path="/dashboard" component={RequireAuth(HomePage)} />
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    <Route path="/login" component={Login} />
    {/* <Route path="/signup" component={Signup} /> */}

    <Route path="/history" component={HistorySection} />
    <Route path="/eventExp" component={EventExplorer} />
    <Route path="/profile" component={UserProfileSection} />
    <Route path="/approvalSection" component={ApprovalSection} />
    <Route path="/not-found" render={() => <h1> Page Not Found </h1>} />
  </Switch>
);

export default RootRouter;
