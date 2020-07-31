import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/components" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
