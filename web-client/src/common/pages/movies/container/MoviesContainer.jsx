import React from 'react';
import { connect } from 'react-redux';
import {
  getMoviesRequest,
  getTodayTrendingMoviesRequest,
  findMovieRequest
} from '../../../../redux/movies-reducer';

import Movies from '../component';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getMoviesRequest,
      getTodayTrendingMoviesRequest
    } = this.props;

    getMoviesRequest();
    getTodayTrendingMoviesRequest();
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
      todayTrendingMovies
    } = this.props;

    return (
      <Movies
        movies={movies}
        todayTrendingMovies={todayTrendingMovies}
        onSubmit={this.onFindMovie.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    todayTrendingMovies: state.movies.todayTrendingMovies
  }
}

export default connect(mapStateToProps,
  {
    getMoviesRequest,
    getTodayTrendingMoviesRequest,
    findMovieRequest
  })(MoviesContainer);