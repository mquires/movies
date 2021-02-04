import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ROUTES from '../common/constants/routes'

import Header from "../common/components/header";
import Sidebar from "../common/components/sidebar";

import Login from "../common/pages/login";

import './app.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Header />
      </Router>
      <div className="app__container">
        <Router history={history}>
          <Sidebar />
          <div className="app__content">
            <Switch>
              <Route
                exact
                path={ROUTES.MAIN}
                render={() => <div>123</div>}
              />
              <Route
                path={ROUTES.LOGIN}
                render={() => <Login />}
              />
              <Route
                path={ROUTES.REGISTRATION}
                render={() => <Registration />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;