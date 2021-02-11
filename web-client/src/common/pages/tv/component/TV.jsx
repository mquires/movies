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

import './tv.scss';

const TV = (props) => {
  const {
    tv,
    onChange,
    todayTrendingTV
  } = props;

  const tvList = tv.map(tvItem => (
    <MovieItem
      id={tvItem.id}
      key={tvItem.id}
      movieName={tvItem.name}
      movieOverview={tvItem.overview}
      language={tvItem.original_language}
      releaseDate={tvItem.first_air_date}
      src={`http://image.tmdb.org/t/p/w1280/${tvItem.poster_path}`}
      alt={tvItem.name}
    />
  ));

  const todayTrendingTVList = todayTrendingTV.map(todayTrendingTVItem => (
    <TrendsItem
      id={todayTrendingTVItem.id}
      key={todayTrendingTVItem.id}
      className="section-items__item"
      name={todayTrendingTVItem.original_title}
      releaseDate={todayTrendingTVItem.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingTVItem.backdrop_path}`}
      alt={todayTrendingTVItem.original_title}
    />
  ));

  return (
    <PageComponent
      className="movies"
      title="TV"
    >
      <SectionInfoSeeAll
        className="section-items"
        title="Today's trending"
        navLink={ROUTES.ALL_TODAY_TRENDS_TV}
      >
        {todayTrendingTVList}
      </SectionInfoSeeAll>
      <SectionInfo
        className="movies__list"
        title="TV list"
        onChange={onChange}
      >
        {tvList}
      </SectionInfo>
    </PageComponent>
  );
};

export default TV;