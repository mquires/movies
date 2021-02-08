import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import ROUTES from '../common/constants/routes'

import HeaderContainer from "../common/components/header/container";
import Sidebar from "../common/components/sidebar";

import Main from "../common/pages/main";
import LoginContainer from "../common/pages/login/container";
import RegistrationContainer from "../common/pages/registration/container";
import Movies from "../common/pages/movies";

import './app.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router history={history}>
          <Sidebar />
          <div className="app__content">
            <HeaderContainer />
            <Switch>
              <Route
                exact
                path={ROUTES.MAIN}
                render={() => <Main />}
              />
              <Route
                path={ROUTES.LOGIN}
                render={() => <LoginContainer />}
              />
              <Route
                path={ROUTES.REGISTRATION}
                render={() => <RegistrationContainer />}
              />
              <Route
                path={ROUTES.MOVIES}
                render={() => <Movies />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;