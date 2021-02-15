import React from 'react';
import { connect } from 'react-redux';
import {
  getMoviesRequest,
  getTodayTrendingMoviesRequest,
  findMovieRequest,
  getTopRatedMoviesRequest
} from '../../../../redux/movies-reducer';

import {
  getPopularPersonsRequest
} from '../../../../redux/persons-reducer';

import Movies from '../component';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getMoviesRequest,
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest,
      getPopularPersonsRequest
    } = this.props;

    getMoviesRequest();
    getTodayTrendingMoviesRequest();
    getTopRatedMoviesRequest();
    getPopularPersonsRequest();
  }

  onFindMovie(movie) {
    const {
      findMovieRequest
    } = this.props;

    findMovieRequest(movie.search);
  }

  render() {
    const {
      movies,
      todayTrendingMovies,
      topRatedMovies,
      popularPersons,
      isFetching
    } = this.props;

    return (
      <Movies
        movies={movies}
        todayTrendingMovies={todayTrendingMovies}
        topRatedMovies={topRatedMovies}
        popularPersons={popularPersons}
        isFetching={isFetching}
       // onChange={this.onFindMovie.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    todayTrendingMovies: state.movies.todayTrendingMovies,
    topRatedMovies: state.movies.topRatedMovies,
    popularPersons: state.persons.popularPersons,
    isFetching: state.movies.isFetching
  }
}

export default connect(mapStateToProps,
  {
    getMoviesRequest,
    getTodayTrendingMoviesRequest,
    findMovieRequest,
    getTopRatedMoviesRequest,
    getPopularPersonsRequest
  })(MoviesContainer);