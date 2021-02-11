import React from 'react';
import { connect } from 'react-redux';
import {
  getUpcomingMoviesRequest
} from '../../../../redux/movies-reducer';

import UpcomingMovies from '../component';

class UpcomingMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getUpcomingMoviesRequest
    } = this.props;

    getUpcomingMoviesRequest();
  }

  render() {
    const {
      upcomingMovies
    } = this.props;

    return (
      <UpcomingMovies
        upcomingMovies={upcomingMovies}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upcomingMovies: state.movies.upcomingMovies
  }
}

export default connect(mapStateToProps,
  {
    getUpcomingMoviesRequest
  })(UpcomingMoviesContainer);