import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';
import { moviesAPI } from '../../../../api/api.tmdb';

import PageComponent from '../../../components/page-components/page-component';
import MovieItem from '../../../components/movie-item';
import Categories from '../../../components/categories';
import CategoryItem from '../../../components/categories/category-item';
import SectionInfo from '../../../components/section-info';
import TrendsItem from '../../../components/trends-item';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';
import Preloader from '../../../components/preloader';
import LoginPopup from '../../../components/popups/login-popup';

import noWallpaper from '../../../../assets/images/no-wallpaper.jpg';

import './movies.scss';

const Movies = (props) => {
  const {
    topRatedMovies,
    todayTrendingMovies,
    isTopRatedFetching,
    genres,
    onSubmit
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [fetching, setIsFetching] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, []);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsFetching(true);
    }
  }

  useEffect(() => findMovieRequest(), []);
  useEffect(() => getMoviesRequest(), [fetching]);

  const findMovieRequest = (query) => {
    moviesAPI.findMovie(query)
      .then((response) => {
        setMovies(() => [...response.data.results]);
      })
  }

  const getMoviesRequest = () => {
    if (!hasNextPage) return;

    if (fetching) {
      moviesAPI.getMovies(page)
        .then((response) => {
          if (response.data.total_results === (movies.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setMovies(movies => [...movies, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const onFindMovie = (movie) => {
    findMovieRequest(movie.search);

    !movie.search && getMoviesRequest();
  }

  const getMoviesByGenreRequest = (genre) => {
    if (!hasNextPage) return;

    moviesAPI.getMoviesByGenre(page, genre)
      .then((response) => {
        console.log(response)
        if (response.data.total_results === (movies.length + response.data.results.length)) {
          setHasNextPage(false);
        }

        setMovies(() => [...response.data.results]);
        setPage(page => page + 1);
      })
      .finally(() => setIsFetching(false));
  }

  const onGetMoviesByGenre = (genreId) => {
    getMoviesByGenreRequest(genreId);
  }

  const moviesList = movies.map((movie, index) => (
    <MovieItem
      navLink={localStorage.getItem('token') ? `${ROUTES.MOVIE_ITEM}/${movie.id}` : '#'}
      id={movie.id}
      onClick={!localStorage.getItem('token') && toggleMenu}
      key={index}
      movieName={movie.original_title}
      movieOverview={movie.overview}
      language={movie.original_language}
      releaseDate={movie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
      alt={movie.original_title}
      onError={(e) => e.target.src = noWallpaper}
    />
  ));

  const todayTrendingMoviesList = todayTrendingMovies.map((todayTrendingMovie, index) => (
    <TrendsItem
      id={todayTrendingMovie.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${todayTrendingMovie.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${todayTrendingMovie.id}`}
      className="section-items__item"
      name={todayTrendingMovie.original_title}
      releaseDate={todayTrendingMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingMovie.backdrop_path}`}
      alt={todayTrendingMovie.original_title}
    />
  ));

  const topRatedMoviesList = topRatedMovies.map((topRatedMovie, index) => (
    <TrendsItem
      id={topRatedMovie.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${topRatedMovie.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${topRatedMovie.id}`}
      className="section-items__item"
      name={topRatedMovie.original_title}
      releaseDate={topRatedMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${topRatedMovie.backdrop_path}`}
      alt={topRatedMovie.original_title}
    />
  ));

  const genresList = genres.map((genre, index) => (
    <CategoryItem
      id={genre.id}
      key={index}
      categoryTitle={genre.name}
      onClick={() => onGetMoviesByGenre(genre.id)}
    />
  ));

  return (
    <PageComponent
      className="movies"
      title="Movies"
    >
      {
        isOpen &&
        <LoginPopup
          open={toggleMenu}
          onRequestClose={closeMenu}
        />
      }
      <Categories title="Find more">
        {genresList}
      </Categories>
      <SectionInfoSeeAll
        className="section-items"
        title="Today's trends"
        navLink={ROUTES.ALL_TODAY_TRENDS_MOVIES}
      >
        {
          fetching ?
            <Preloader /> :
            <>{todayTrendingMoviesList}</>
        }
      </SectionInfoSeeAll>
      <SectionInfoSeeAll
        className="section-items"
        title="Top rated"
        navLink={ROUTES.TOP_RATED_MOVIES}
      >
        {
          isTopRatedFetching ?
            <Preloader /> :
            <>{topRatedMoviesList}</>
        }
      </SectionInfoSeeAll>
      <SectionInfo
        className="movies__list"
        title="Movies list"
        onChange={onFindMovie}
      >
        {moviesList}
      </SectionInfo>
    </PageComponent>
  );
};

export default Movies;