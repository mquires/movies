import React from 'react';
import { connect } from 'react-redux';
import { getTodayTrendingMoviesRequest } from '../../../../redux/movies-reducer';

import TrendsMovies from '../component';

class TrendsMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTodayTrendingMoviesRequest
    } = this.props;

    getTodayTrendingMoviesRequest();
  }

  render() {
    const {
      todayTrendingMovies
    } = this.props;

    return (
      <TrendsMovies todayTrendingMovies={todayTrendingMovies} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todayTrendingMovies: state.movies.todayTrendingMovies
  }
}

export default connect(mapStateToProps, { getTodayTrendingMoviesRequest })(TrendsMoviesContainer);