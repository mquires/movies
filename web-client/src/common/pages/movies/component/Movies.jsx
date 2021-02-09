import React from 'react';
import PropTypes from 'prop-types';

import PageComponent from '../../../components/page-component';
import MovieItem from '../../../components/movie-item';

import './movies.scss';

const Movies = (props) => {
  const {
    movies
  } = props;

  const moviesList = movies.map(movie => (
    <MovieItem
      id={movie.id}
      key={movie.id}
      movieName={movie.original_title}
      movieOverview={movie.overview}
      language={movie.original_language}
      releaseDate={movie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
      alt={movie.original_title}
    />
  ));

  return (
    <PageComponent
      className="movies"
      title="Movies"
    >
      <div className="movies__container">
        {moviesList}
      </div>
    </PageComponent>
  );
};

export default Movies;