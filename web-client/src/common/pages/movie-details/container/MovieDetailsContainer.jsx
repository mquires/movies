import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getPopularPersonsRequest } from '../../../../redux/persons-reducer';
import { getMovieDetailsRequest, getRecommendationsRequest } from '../../../../redux/movies-reducer';

import MovieDetails from '../component';

class MovieDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest,
      getMovieDetailsRequest,
      getRecommendationsRequest,
      match
    } = this.props;

    getPopularPersonsRequest(1);
    getMovieDetailsRequest(match.params.id);
    getRecommendationsRequest(match.params.id);
  }

  render() {
    const {
      popularPersons,
      movieDetails,
      recommendations
    } = this.props;

    return (
      <MovieDetails
        popularPersons={popularPersons}
        movieDetails={movieDetails}
        recommendations={recommendations}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularPersons: state.persons.popularPersons,
    movieDetails: state.movies.movieDetails,
    recommendations: state.movies.recommendations
  }
}

export default compose(
  connect(mapStateToProps, { getPopularPersonsRequest, getMovieDetailsRequest, getRecommendationsRequest }),
  withRouter
)(MovieDetailsContainer);