import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './views/HomePage';
import InstallationPage from './views/InstallationPage';
import NotFoundPage from './views/NotFoundPage';

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/installation" component={InstallationPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </>
);

export default App;
