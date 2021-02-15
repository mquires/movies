import React from 'react';
import { connect } from 'react-redux';
import { getTopRatedMoviesRequest } from '../../../../redux/movies-reducer';

import TopRatedMovies from '../component';

class TopRatedMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTopRatedMoviesRequest,
      currentPage
    } = this.props;

    getTopRatedMoviesRequest(currentPage);
  }

  loadMoreData() {
    const {
      getTopRatedMoviesRequest,
      currentPage
    } = this.props;

    (currentPage > 1) && getTopRatedMoviesRequest(currentPage);
  }

  render() {
    const {
      topRatedMovies
    } = this.props;

    return (
      <TopRatedMovies
        topRatedMovies={topRatedMovies}
        loadMoreData={this.loadMoreData.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedMovies: state.movies.topRatedMovies,
    currentPage: state.movies.currentPage
  }
}

export default connect(mapStateToProps, { getTopRatedMoviesRequest })(TopRatedMoviesContainer);