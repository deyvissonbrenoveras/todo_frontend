import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registrar" component={SignUp} />
      <Route path="/painel" isPrivate component={Dashboard} />
      <Route path="/perfil" isPrivate component={Profile} />
    </Switch>
  );
}

export default Routes;
