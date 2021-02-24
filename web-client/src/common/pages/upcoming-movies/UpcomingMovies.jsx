import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { moviesAPI } from '../../../api/api.tmdb';
import ROUTES from '../../constants/routes';

import TrendsItem from '../../components/trends-item';

import upcomingMoviesImage from '../../../assets/images/upcoming_movies.jpg';
import upcomingMoviesIcon from '../../../assets/icons/top-week.svg';
import ShowMorePageItem from '../../components/show-more-page-item';
import Preloader from '../../components/preloader';

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

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

  useEffect(() => getData(), [fetching]);

  const getData = () => {
    if (!hasNextPage) return;

    if (fetching) {
      moviesAPI.getUpcomingMovies(page)
        .then((response) => {
          if (response.data.total_results === (upcomingMovies.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setUpcomingMovies(upcomingMovies => [...upcomingMovies, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const upcomingMoviesList = upcomingMovies.map((upcomingMovie, index) => (
    <TrendsItem
      id={upcomingMovie.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${upcomingMovie.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${upcomingMovie.id}`}
      name={upcomingMovie.original_title}
      releaseDate={upcomingMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${upcomingMovie.backdrop_path}`}
      alt={upcomingMovie.original_title}
    />
  ));

  return (
    <ShowMorePageItem
      title="Upcoming movies"
      showMorePageTitle="Upcoming movies"
      src={upcomingMoviesImage}
      alt="Upcoming movies"
      glyph={upcomingMoviesIcon.id}
      viewBox={upcomingMoviesIcon.viewBox}
    >
      {
        upcomingMovies.length === 0 ?
          <Preloader /> :
          upcomingMoviesList
      }
    </ShowMorePageItem>
  );
};

export default UpcomingMovies;