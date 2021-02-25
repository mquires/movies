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
import ProfileContainer from "../common/pages/profile/container";
import TopRatedMovies from "../common/pages/top-rated-movies/component";
import TVContainer from "../common/pages/tv/container";
import UpcomingMovies from "../common/pages/upcoming-movies";
import TrendsMovies from "../common/pages/trends-movies/component";
import PopularPersons from "../common/pages/popular-persons/component";
import ShowMore from "../common/pages/show-more/component";
import TrendsTV from "../common/pages/trends-tv/component";
import MovieDetailsContainer from "../common/pages/movie-details/container";
import TVDetailsContainer from "../common/pages/tv-details/container";
import PersonDetailsContainer from "../common/pages/person-details/container";
import AdminPanelContainer from "../common/pages/admin-panel/container";
import TopRatedTV from "../common/pages/top-rated-tv";
import TopWeekMovies from "../common/pages/top-week-movies";
import TopWeekSerials from "../common/pages/top-week-serials";
import TodayBestActors from "../common/pages/today-best-actors";
import LatestMoviesContainer from "../common/pages/latest-movies/container";
import FeedbackContainer from "../common/pages/feedback/container";

import './app.scss';
import SupportContainer from "../common/pages/support/container";

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
                path={`${ROUTES.PROFILE}/:id?`}
                render={() => <ProfileContainer />}
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
                render={() => <UpcomingMovies />}
              />
              <Route
                path={ROUTES.ALL_TODAY_TRENDS_TV}
                render={() => <TrendsTV />}
              />
              <Route
                path={`${ROUTES.MOVIE_ITEM}/:id`}
                render={() => <MovieDetailsContainer />}
              />
              <Route
                path={`${ROUTES.TV_ITEM}/:id`}
                render={() => <TVDetailsContainer />}
              />
              <Route
                path={`${ROUTES.PERSON_ITEM}/:id`}
                render={() => <PersonDetailsContainer />}
              />
              <Route
                path={`${ROUTES.ADMIN_PANEL}`}
                render={() => <AdminPanelContainer />}
              />
              <Route
                path={`${ROUTES.TOP_RATED_TV}`}
                render={() => <TopRatedTV />}
              />
              <Route
                path={`${ROUTES.TOP_WEEK_MOVIES}`}
                render={() => <TopWeekMovies />}
              />
              <Route
                path={`${ROUTES.TOP_WEEK_SERIALS}`}
                render={() => <TopWeekSerials />}
              />
              <Route
                path={`${ROUTES.TODAY_POPULAR_PERSONS}`}
                render={() => <TodayBestActors />}
              />
              <Route
                path={`${ROUTES.LATEST_MOVIES}`}
                render={() => <LatestMoviesContainer />}
              />
              <Route
                path={`${ROUTES.FEEDBACK}`}
                render={() => <FeedbackContainer />}
              />
              <Route
                path={`${ROUTES.SUPPORT}`}
                render={() => <SupportContainer />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;