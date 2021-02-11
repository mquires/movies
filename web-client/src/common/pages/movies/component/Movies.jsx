import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import PageComponent from '../../../components/page-components/page-component';
import MovieItem from '../../../components/movie-item';
import Categories from '../../../components/categories';
import CategoryItem from '../../../components/categories/category-item';
import SectionInfo from '../../../components/section-info';
import TrendsItem from '../../../components/trends-item';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';
import ActorItem from '../../../components/items/actor-item';

import './movies.scss';

const Movies = (props) => {
  const {
    movies,
    todayTrendingMovies,
    onChange,
    topRatedMovies,
    popularPersons
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

  const todayTrendingMoviesList = todayTrendingMovies.map(todayTrendingMovie => (
    <TrendsItem
      id={todayTrendingMovie.id}
      key={todayTrendingMovie.id}
      className="section-items__item"
      name={todayTrendingMovie.original_title}
      releaseDate={todayTrendingMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingMovie.backdrop_path}`}
      alt={todayTrendingMovie.original_title}
    />
  ));

  const topRatedMoviesList = topRatedMovies.map(topRatedMovie => (
    <TrendsItem
      id={topRatedMovie.id}
      key={topRatedMovie.id}
      className="section-items__item"
      name={topRatedMovie.original_title}
      releaseDate={topRatedMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${topRatedMovie.backdrop_path}`}
      alt={topRatedMovie.original_title}
    />
  ));

  const popularPersonsList = popularPersons.map(popularPerson => (
    <ActorItem
      id={popularPerson.id}
      key={popularPerson.id}
      className="section-items__item"
      title={popularPerson.name}
      src={`http://image.tmdb.org/t/p/w1280/${popularPerson.profile_path}`}
      alt={popularPerson.name}
    />
  ));

  return (
    <PageComponent
      className="movies"
      title="Movies"
    >
      <Categories title="Find more">
        <CategoryItem categoryTitle="Comedy" />
        <CategoryItem categoryTitle="Comedy" />
        <CategoryItem categoryTitle="Comedy" />
      </Categories>
      <SectionInfoSeeAll
        className="section-items"
        title="Today's trends"
        navLink={ROUTES.ALL_TODAY_TRENDS_MOVIES}
      >
        {todayTrendingMoviesList}
      </SectionInfoSeeAll>
      <SectionInfoSeeAll
        className="section-items"
        title="Popular persons"
        navLink={ROUTES.POPULAR_PERSONS}
      >
        {popularPersonsList}
      </SectionInfoSeeAll>
      <SectionInfoSeeAll
        className="section-items"
        title="Top rated"
        navLink={ROUTES.TOP_RATED_MOVIES}
      >
        {topRatedMoviesList}
      </SectionInfoSeeAll>
      <SectionInfo
        className="movies__list"
        title="Movies list"
        onChange={onChange}
      >
        {moviesList}
      </SectionInfo>
    </PageComponent>
  );
};

export default Movies;