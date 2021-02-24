import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { moviesAPI } from '../../../api/api.tmdb';
import ROUTES from '../../constants/routes';

import TrendsItem from '../../components/trends-item';

import topWeekMoviesImage from '../../../assets/images/top_weeks_movies.jpg';
import topWeekMoviesIcon from '../../../assets/icons/top-week.svg';
import ShowMorePageItem from '../../components/show-more-page-item';
import Preloader from '../../components/preloader';

const TopWeekMovies = () => {
  const [topWeekMovies, setTopWeekMovies] = useState([]);

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
      moviesAPI.getTopWeekMovies(page)
        .then((response) => {
          console.log(response)
          if (response.data.total_results === (topWeekMovies.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTopWeekMovies(topWeekMovies => [...topWeekMovies, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const topWeekMoviesList = topWeekMovies.map((topWeekMovie, index) => (
    <TrendsItem
      id={topWeekMovie.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${topWeekMovie.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${topWeekMovie.id}`}
      name={topWeekMovie.original_title}
      releaseDate={topWeekMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${topWeekMovie.backdrop_path}`}
      alt={topWeekMovie.original_title}
    />
  ));

  return (
    <ShowMorePageItem
      title="Top week's movies"
      showMorePageTitle="Top week's movies"
      src={topWeekMoviesImage}
      alt="Top week's movies"
      glyph={topWeekMoviesIcon.id}
      viewBox={topWeekMoviesIcon.viewBox}
    >
      {
        topWeekMovies.length === 0 ?
          <Preloader /> :
          topWeekMoviesList
      }
    </ShowMorePageItem>
  );
};

export default TopWeekMovies;