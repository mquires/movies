import React from 'react';
import { connect } from 'react-redux';
import { getMoviesRequest } from '../../../../redux/movies-reducer';

import Movies from '../component';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getMoviesRequest
    } = this.props;

    getMoviesRequest();
  }

  render() {
    const {
      movies
    } = this.props;

    return (
      <Movies movies={movies} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies
  }
}

export default connect(mapStateToProps, { getMoviesRequest })(MoviesContainer);