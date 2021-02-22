import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getTodayTrendingMoviesRequest,
  getTopRatedMoviesRequest,
  getGenresRequest
} from '../../../../redux/movies-reducer';

import Movies from '../component';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest,
      getGenresRequest
    } = this.props;

    getTodayTrendingMoviesRequest(1);
    getTopRatedMoviesRequest(1);
    getGenresRequest();
  }

  render() {
    return (
      <Movies {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todayTrendingMovies: state.movies.todayTrendingMovies,
    topRatedMovies: state.movies.topRatedMovies,
    isTopRatedFetching: state.movies.isTopRatedFetching,
    genres: state.movies.genres
  }
}

export default compose(
  connect(mapStateToProps,
    {
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest,
      getGenresRequest
    }),
  withRouter
)(MoviesContainer);