import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { moviesAPI } from '../../../../api/api.tmdb';
import ROUTES from '../../../constants/routes';

import SectionPageNoSearch from '../../../components/page-components/section-page-no-search';
import TrendsItem from '../../../components/trends-item';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

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
      moviesAPI.getTopRatedMovies(page)
        .then((response) => {
          if (response.data.total_results === (topRatedMovies.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTopRatedMovies(topRatedMovies => [...topRatedMovies, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const topRatedMoviesList = topRatedMovies.map((topRatedMovie, index) => (
    <TrendsItem
      id={topRatedMovie.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${topRatedMovie.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${topRatedMovie.id}`}
      name={topRatedMovie.original_title}
      releaseDate={topRatedMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${topRatedMovie.backdrop_path}`}
      alt={topRatedMovie.original_title}
    />
  ));

  return (
    <SectionPageNoSearch title="Top rated">
      {topRatedMoviesList}
    </SectionPageNoSearch>
  );
};

export default TopRatedMovies;