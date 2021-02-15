import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { moviesAPI } from '../../../../api/api.tmdb';

import SectionPageNoSearch from '../../../components/page-components/section-page-no-search';
import TrendsItem from '../../../components/trends-item';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => getData(), []);

  const getData = () => {
    if (!hasNextPage) return;

    moviesAPI.getTopRatedMovies(page)
      .then((response) => {
        if (response.data.total_results === (topRatedMovies.length + response.data.results.length)) {
          setHasNextPage(false);
        }

        setTopRatedMovies(topRatedMovies => [...topRatedMovies, ...response.data.results]);
        setPage(page => page + 1);
      })
  }

  const loadMoreData = () => (page > 1) && getData();

  const topRatedMoviesList = topRatedMovies.map(topRatedMovie => (
    <TrendsItem
      id={topRatedMovie.id}
      key={topRatedMovie.id}
      name={topRatedMovie.original_title}
      releaseDate={topRatedMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${topRatedMovie.backdrop_path}`}
      alt={topRatedMovie.original_title}
    />
  ));

  return (
    <SectionPageNoSearch title="Top rated" onEnter={loadMoreData}>
      {topRatedMoviesList}
    </SectionPageNoSearch>
  );
};

export default TopRatedMovies;