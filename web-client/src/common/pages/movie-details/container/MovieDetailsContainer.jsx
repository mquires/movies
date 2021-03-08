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
  getMoviesCastRequest,
  getMovieVideosRequest,
  sendFavoriteMovieRequest
} from '../../../../redux/movies-reducer';

import MovieDetails from '../component';

class MovieDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest,
      getMovieDetailsRequest,
      getRecommendationsRequest,
      getMovieImagesRequest,
      getSimilarMoviesRequest,
      getMoviesKeywordsRequest,
      getMoviesCastRequest,
      getMovieVideosRequest,
      match
    } = this.props;

    getPopularPersonsRequest(1);
    getMovieDetailsRequest(match.params.id);
    getRecommendationsRequest(match.params.id);
    getMovieImagesRequest(match.params.id);
    getSimilarMoviesRequest(match.params.id);
    getMoviesKeywordsRequest(match.params.id);
    getMoviesCastRequest(match.params.id);
    getMovieVideosRequest(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const {
        getMovieDetailsRequest,
        getRecommendationsRequest,
        getMovieImagesRequest,
        getSimilarMoviesRequest,
        getMoviesKeywordsRequest,
        getMoviesCastRequest,
        getMovieVideosRequest,
        match
      } = this.props;

      getMovieDetailsRequest(match.params.id);
      getRecommendationsRequest(match.params.id);
      getMovieImagesRequest(match.params.id);
      getSimilarMoviesRequest(match.params.id);
      getMoviesKeywordsRequest(match.params.id);
      getMoviesCastRequest(match.params.id);
      getMovieVideosRequest(match.params.id);
    }
  }

  onSendFavoriteMovie(userId, movieId) {
    const {
      sendFavoriteMovieRequest
    } = this.props;

    sendFavoriteMovieRequest(userId, movieId);
  }

  render() {
    return (
      <MovieDetails onSendFavoriteMovie={this.onSendFavoriteMovie.bind(this)} {...this.props} />
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
    moviesCast: state.movies.moviesCast,
    movieVideos: state.movies.movieVideos
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
    getMoviesCastRequest,
    getMovieVideosRequest,
    sendFavoriteMovieRequest
  }),
  withRouter
)(MovieDetailsContainer);