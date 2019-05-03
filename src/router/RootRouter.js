import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../modules/auth/pages/Auth';
import HomePage from '../modules/home/pages/HomePage';

import UserProfileSection from '../shared/userProfileSection/userProfileSection';
import ApprovalSection from '../shared/approval_section/approvalSectionComponent';
import DeleteDialogBox from '../shared/deleteDialogBox/deleteDialogBox';
import Comments from '../shared/commentSection/Comments';

import RequireAuth from './RequireAuth';

export const VIEW_TYPES = {
  login: 1001,
  signUp: 1002,
  forgonPassword: 1003
};

const RootRouter = () => (
  <Switch>
    <Route exact path="/dashboard" component={RequireAuth(HomePage)} />
    {/* <Route exact path={RouteTypes.login} component={AuthLogin} /> */}
    {/* <Route path="/auth/callback" component={AuthCallback} /> */}
    {/* <PrivateRoute path="/" component={MainPage} /> */}
    <Route
      path="/login"
      render={props => <Auth {...props} viewType={VIEW_TYPES.login} />}
    />
    <Route
      path="/signup"
      render={props => <Auth {...props} viewType={VIEW_TYPES.signUp} />}
    />
    {/* <Route path="/signup" component={Signup} /> */}

    <Route path="/profile" component={UserProfileSection} />
    <Route path="/approvalSection" component={ApprovalSection} />
    <Route path="/comments" component={Comments} />
    <Route path="/not-found" render={() => <h1> Page Not Found </h1>} />
    <Route path="/delete" component={DeleteDialogBox} />
  </Switch>
);

export default RootRouter;
