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
import MoviesContainer from "../common/pages/movies/container";
import Profile from "../common/pages/profile";
import TrendsMoviesContainer from "../common/pages/trends-movies/container";
import TopRatedMoviesContainer from "../common/pages/top-rated-movies/container";
import PopularPersonsContainer from "../common/pages/popular-persons/container";
import TVContainer from "../common/pages/tv/container";
import ShowMoreContainer from "../common/pages/show-more/container";

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
                render={() => <MoviesContainer />}
              />
              <Route
                path={ROUTES.PROFILE}
                render={() => <Profile />}
              />
              <Route
                path={ROUTES.ALL_TODAY_TRENDS_MOVIES}
                render={() => <TrendsMoviesContainer />}
              />
              <Route
                path={ROUTES.TOP_RATED_MOVIES}
                render={() => <TopRatedMoviesContainer />}
              />
              <Route
                path={ROUTES.POPULAR_PERSONS}
                render={() => <PopularPersonsContainer />}
              />
              <Route
                path={ROUTES.TV}
                render={() => <TVContainer />}
              />
              <Route
                path={ROUTES.SHOW_MORE}
                render={() => <ShowMoreContainer />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;