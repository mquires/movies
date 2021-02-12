import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SectionPageNoSearch from '../../../components/page-components/section-page-no-search';
import TrendsItem from '../../../components/trends-item';
import * as axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const TopRatedMovies = (props) => {
  const {
    topRatedMovies
  } = props;

  /*const [topRatedMovies, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios.get(`http://api.themoviedb.org/3/movie/top_rated?api_key=e76fd28bc6d77e87ebae191d64a73110&page=${currentPage}`)
        .then(res => {
          setPhotos([...topRatedMovies, ...res.data.results]);
          setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setIsFetching(false))
    }
  }, [fetching])

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
  }*/

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
    <SectionPageNoSearch title="Top rated">
      {topRatedMoviesList}
    </SectionPageNoSearch>
  );
};

export default TopRatedMovies;