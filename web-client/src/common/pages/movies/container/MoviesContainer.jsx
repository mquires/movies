import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getTodayTrendingMoviesRequest,
  getTopRatedMoviesRequest
} from '../../../../redux/movies-reducer';

import Movies from '../component';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest
    } = this.props;

    getTodayTrendingMoviesRequest(1);
    getTopRatedMoviesRequest(1);
  }

  render() {
    const {
      todayTrendingMovies,
      topRatedMovies,
      isTopRatedFetching
    } = this.props;

    return (
      <Movies
        todayTrendingMovies={todayTrendingMovies}
        topRatedMovies={topRatedMovies}
        isTopRatedFetching={isTopRatedFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todayTrendingMovies: state.movies.todayTrendingMovies,
    topRatedMovies: state.movies.topRatedMovies,
    isTopRatedFetching: state.movies.isTopRatedFetching
  }
}

export default compose(
  connect(mapStateToProps,
    {
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest
    }),
  withRouter
)(MoviesContainer);