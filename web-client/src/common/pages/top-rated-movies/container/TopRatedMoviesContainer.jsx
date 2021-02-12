import React from 'react';
import { connect } from 'react-redux';
import { getTopRatedMoviesRequest, scrollHandler } from '../../../../redux/movies-reducer';

import TopRatedMovies from '../component';

class TopRatedMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTopRatedMoviesRequest,
      scrollHandler,
      currentPage,
      isFetching
    } = this.props;

    document.addEventListener('scroll', scrollHandler);

    getTopRatedMoviesRequest();
  }

  componentWillUnmount() {
    const {
      scrollHandler
    } = this.props;

    document.removeEventListener('scroll', scrollHandler);
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
    topRatedMovies: state.movies.topRatedMovies,
    currentPage: state.movies.currentPage,
    isFetching: state.movies.isFetching
  }
}

export default connect(mapStateToProps, { getTopRatedMoviesRequest, scrollHandler })(TopRatedMoviesContainer);