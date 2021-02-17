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
import TopRatedMovies from "../common/pages/top-rated-movies/component";
import TVContainer from "../common/pages/tv/container";
import UpcomingMoviesContainer from "../common/pages/upcoming-movies/container";
import TrendsMovies from "../common/pages/trends-movies/component";
import PopularPersons from "../common/pages/popular-persons/component";
import ShowMore from "../common/pages/show-more/component";
import TrendsTV from "../common/pages/trends-tv/component";
import MovieDetailsContainer from "../common/pages/movie-details/container";

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
                render={() => <TrendsMovies />}
              />
              <Route
                path={ROUTES.TOP_RATED_MOVIES}
                render={() => <TopRatedMovies />}
              />
              <Route
                path={ROUTES.POPULAR_PERSONS}
                render={() => <PopularPersons />}
              />
              <Route
                path={ROUTES.TV}
                render={() => <TVContainer />}
              />
              <Route
                path={ROUTES.SHOW_MORE}
                render={() => <ShowMore />}
              />
              <Route
                path={ROUTES.UPCOMING_MOVIES}
                render={() => <UpcomingMoviesContainer />}
              />
              <Route
                path={ROUTES.ALL_TODAY_TRENDS_TV}
                render={() => <TrendsTV />}
              />
              

              <Route
                path='/mmm'
                render={() => <MovieDetailsContainer />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;