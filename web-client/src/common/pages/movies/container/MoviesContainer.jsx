import React from 'react';
import { connect } from 'react-redux';
import { getTodayTrendingMoviesRequest, getTopRatedMoviesRequest } from '../../../../redux/movies-reducer';
import { getPopularPersonsRequest } from '../../../../redux/persons-reducer';

import Movies from '../component';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest,
      getPopularPersonsRequest
    } = this.props;

    getTodayTrendingMoviesRequest(1);
    getTopRatedMoviesRequest(1);
    getPopularPersonsRequest(1);
  }

  render() {
    const {
      todayTrendingMovies,
      topRatedMovies,
      popularPersons,
      isTopRatedFetching
    } = this.props;

    return (
      <Movies
        todayTrendingMovies={todayTrendingMovies}
        topRatedMovies={topRatedMovies}
        popularPersons={popularPersons}
        isTopRatedFetching={isTopRatedFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todayTrendingMovies: state.movies.todayTrendingMovies,
    topRatedMovies: state.movies.topRatedMovies,
    popularPersons: state.persons.popularPersons,
    isTopRatedFetching: state.movies.isTopRatedFetching
  }
}

export default connect(mapStateToProps,
  {
    getTodayTrendingMoviesRequest,
    getTopRatedMoviesRequest,
    getPopularPersonsRequest
  })(MoviesContainer);