import React from 'react';
import { connect } from 'react-redux';
import { getTopRatedMoviesRequest } from '../../../../redux/movies-reducer';

import TopRatedMovies from '../component';

class TopRatedMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTopRatedMoviesRequest
    } = this.props;

    getTopRatedMoviesRequest();
  }

  render() {
    const {
      topRatedMovies
    } = this.props;

    return (
      <TopRatedMovies topRatedMovies={topRatedMovies} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedMovies: state.movies.topRatedMovies
  }
}

export default connect(mapStateToProps, { getTopRatedMoviesRequest })(TopRatedMoviesContainer);