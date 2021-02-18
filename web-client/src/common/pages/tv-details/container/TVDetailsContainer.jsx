import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getPopularPersonsRequest } from '../../../../redux/persons-reducer';
import {
  getMovieDetailsRequest,
  getRecommendationsRequest,
  getMovieImagesRequest,
  getSimilarMoviesRequest,
  getMoviesKeywordsRequest,
  getMoviesCastRequest
} from '../../../../redux/movies-reducer';

import MovieDetails from '../component';

class TVDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest,
      getMovieDetailsRequest,
      getRecommendationsRequest,
      getMovieImagesRequest,
      getSimilarMoviesRequest,
      getMoviesKeywordsRequest,
      getMoviesCastRequest,
      match
    } = this.props;

    getPopularPersonsRequest(1);
    getMovieDetailsRequest(match.params.id);
    getRecommendationsRequest(match.params.id);
    getMovieImagesRequest(match.params.id);
    getSimilarMoviesRequest(match.params.id);
    getMoviesKeywordsRequest(match.params.id);
    getMoviesCastRequest(match.params.id);
  }

  componentDidUpdate() {
    const {
      getMovieDetailsRequest,
      match
    } = this.props;

    getMovieDetailsRequest(match.params.id);
  }

  render() {
    const {
      popularPersons,
      movieDetails,
      recommendations,
      movieImages,
      similarMovies,
      moviesKeywords,
      moviesCast
    } = this.props;

    return (
      <MovieDetails
        popularPersons={popularPersons}
        movieDetails={movieDetails}
        recommendations={recommendations}
        movieImages={movieImages}
        similarMovies={similarMovies}
        moviesKeywords={moviesKeywords}
        moviesCast={moviesCast}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularPersons: state.persons.popularPersons,
    movieDetails: state.movies.movieDetails,
    recommendations: state.movies.recommendations,
    movieImages: state.movies.movieImages,
    similarMovies: state.movies.similarMovies,
    moviesKeywords: state.movies.moviesKeywords,
    moviesCast: state.movies.moviesCast
  }
}

export default compose(
  connect(mapStateToProps, {
    getPopularPersonsRequest,
    getMovieDetailsRequest,
    getRecommendationsRequest,
    getMovieImagesRequest,
    getSimilarMoviesRequest,
    getMoviesKeywordsRequest,
    getMoviesCastRequest
  }),
  withRouter
)(TVDetailsContainer);