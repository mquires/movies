import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { moviesAPI } from '../../../../api/api.tmdb';
import ROUTES from '../../../constants/routes';

import SectionPageNoSearch from '../../../components/page-components/section-page-no-search';
import TrendsItem from '../../../components/trends-item';

const TrendsMovies = () => {
  const [todayTrendingMovies, setTodayTrendingMovies] = useState([]);

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
      moviesAPI.getTodayTrendingMovies(page)
        .then((response) => {
          if (response.data.total_results === (todayTrendingMovies.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTodayTrendingMovies(todayTrendingMovies => [...todayTrendingMovies, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const todayTrendingMoviesList = todayTrendingMovies.map((todayTrendingMovie, index) => (
    <TrendsItem
      id={todayTrendingMovie.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${todayTrendingMovie.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${todayTrendingMovie.id}`}
      name={todayTrendingMovie.original_title}
      releaseDate={todayTrendingMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingMovie.backdrop_path}`}
      alt={todayTrendingMovie.original_title}
    />
  ));

  return (
    <SectionPageNoSearch title="Trends movies">
      {todayTrendingMoviesList}
    </SectionPageNoSearch>
  );
};

export default TrendsMovies;