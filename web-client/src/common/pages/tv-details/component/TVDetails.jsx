import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Image from '../../../components/image';
import Avatar from '../../../components/avatar';
import ROUTES from '../../../constants/routes';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';
import TrendsItem from '../../../components/trends-item';
import ActorItem from '../../../components/items/actor-item';
import MovieTvItem from '../../../components/items/movie-tv-item';
import Preloader from '../../../components/preloader';
import ErrorMessage from '../../../components/error-message/ErrorMessage';
import DetailItemBackground from '../../../components/detail-item-background';
import DetailItemPoster from '../../../components/detail-item-poster/DetailItemPoster';
import DetailItemSectionList from '../../../components/detail-item-section-list';
import PageWithSuccessMessage from '../../../components/page-components/page-with-success-message';

import noPhoto from '../../../../assets/images/no-photo.png';
import noAvatar from '../../../../assets/images/no-avatar.jpg';

import './tv-details.scss';

const TVDetails = (props) => {
  const {
    className,
    popularPersons,
    tvDetails,
    tvKeywords,
    TVCast,
    tvRecommendations,
    similarTV,
    tvImages,
    tvVideos,
    onSendFavoriteSerial,
    successSending,
    userId,
    onDeteleFavoriteTVByUserId,
    isFavoriteTV
  } = props;

  const popularPersonsList = popularPersons.map((popularPerson, index) => (
    <ActorItem
      id={popularPerson.id}
      key={index}
      navLink={`${ROUTES.PERSON_ITEM}/${popularPerson.id}`}
      className="section-items__item"
      title={popularPerson.name}
      src={`http://image.tmdb.org/t/p/w1280/${popularPerson.profile_path}`}
      alt={popularPerson.name}
      onError={(e) => e.target.src = 'https://static.thenounproject.com/png/156197-200.png'}
    />
  ));

  const tvKeywordsList = tvKeywords.map((tvKeyword, index) => (
    <li
      className="movie-details__keyword"
      id={tvKeyword.id}
      key={index}
    >
      {tvKeyword.name}
    </li>
  ));

  const tvCastList = TVCast.map((tvCastItem, index) => (
    <NavLink
      to={`${ROUTES.PERSON_ITEM}/${tvCastItem.id}`}
      className="movie-details__actor"
      id={tvCastItem.id}
      key={index}
    >
      <Avatar
        src={`http://image.tmdb.org/t/p/w1280${tvCastItem.profile_path}`}
        alt={tvCastItem.name}
        onError={(e) => e.target.src = noAvatar}
      />
      <p>{tvCastItem.name}</p>
    </NavLink>
  ));

  const recommendationsList = tvRecommendations.map((tvRecommendation, index) => (
    <li
      className="movie-details__similar-movie-item"
      id={tvRecommendation.id}
      key={index}
    >
      <TrendsItem
        navLink={`${ROUTES.TV_ITEM}/${tvRecommendation.id}`}
        navPlayButtonLink={`${ROUTES.TV_ITEM}/${tvRecommendation.id}`}
        name={tvRecommendation.name}
        releaseDate={tvRecommendation.first_air_date}
        src={`http://image.tmdb.org/t/p/w1280${tvRecommendation.backdrop_path}`}
        alt={tvRecommendation.name}
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const similarTVList = similarTV.map((similarTVItem, index) => (
    <li
      className="movie-details__similar-movie-item"
      id={similarTVItem.id}
      key={index}
    >
      <TrendsItem
        navLink={`${ROUTES.TV_ITEM}/${similarTVItem.id}`}
        navPlayButtonLink={`${ROUTES.TV_ITEM}/${similarTVItem.id}`}
        name={similarTVItem.name}
        releaseDate={similarTVItem.release_date}
        src={`http://image.tmdb.org/t/p/w1280${similarTVItem.backdrop_path}`}
        alt={similarTVItem.name}
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const tvImagesList = tvImages.map((tvImage, index) => (
    <li
      className="movie-details__picture-item"
      id={tvImage.id}
      key={index}
    >
      <Image
        className="movie-details__picture"
        src={`http://image.tmdb.org/t/p/w1280${tvImage.file_path}`}
        alt="Picture of the movie"
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const productionCompaniesList = (!tvDetails?.production_companies) ?
    <Preloader /> :
    tvDetails?.production_companies.map((productionCompany, index) => (
      <MovieTvItem
        id={productionCompany.id}
        key={index}
        title={productionCompany.name}
        src={`http://image.tmdb.org/t/p/w1280${productionCompany.logo_path}`}
        alt={productionCompany.name}
        onError={(e) => e.target.src = noPhoto}
      />
    ));

  return (
    <PageWithSuccessMessage
      successSending={successSending}
      message="The serial was successfully added"
    >
      <section className={classNames("movie-details", className)}>
        {!tvDetails ?
          <Preloader /> :
          <>
            <DetailItemBackground
              backgroundImage={tvDetails.backdrop_path}
              title={tvDetails.name}
              video={tvVideos}
            />
            <div className="movie-details__container">
              <div className="movie-details__info-wrapper">
                <div className="movie-details__info">
                  <DetailItemPoster
                    budget={tvDetails.budget}
                    language={tvDetails.original_language}
                    overview={tvDetails.overview}
                    posterImage={tvDetails.poster_path}
                    onSendFavoriteMovie={onSendFavoriteSerial}
                    movieDetails={tvDetails}
                    userId={userId}
                    onDeteleFavoriteMovieByUserId={onDeteleFavoriteTVByUserId}
                    isFavoriteMovie={isFavoriteTV}
                  >
                    {
                      tvKeywordsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{tvKeywordsList}</>
                    }
                  </DetailItemPoster>
                  <SectionInfoSeeAll title="Pictures" navLink={ROUTES.MAIN} className="movie-details__section-info">
                    <ul className="movie-details__pictures-list">
                      {
                        tvImagesList.length === 0 ?
                          <ErrorMessage message="List is empty" /> :
                          <>{tvImagesList}</>
                      }
                    </ul>
                  </SectionInfoSeeAll>
                  <DetailItemSectionList title="Similar TV Shows">
                    {
                      similarTVList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{similarTVList}</>
                    }
                  </DetailItemSectionList>
                  <DetailItemSectionList title="Production companies">
                    {
                      productionCompaniesList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{productionCompaniesList}</>
                    }
                  </DetailItemSectionList>
                  <DetailItemSectionList title="Recommendations">
                    {
                      recommendationsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{recommendationsList}</>
                    }
                  </DetailItemSectionList>
                  <SectionInfoSeeAll
                    className="section-items"
                    title="Popular persons"
                    navLink={ROUTES.POPULAR_PERSONS}
                  >
                    {popularPersonsList}
                  </SectionInfoSeeAll>
                </div>
              </div>
              <div className="movie-details__cast">
                <h3 className="movie-details__cast-title">Cast</h3>
                {
                  tvCastList.length === 0 ?
                    <ErrorMessage message="List is empty" /> :
                    <>{tvCastList}</>
                }
              </div>
            </div>
          </>
        }
      </section>
    </PageWithSuccessMessage>
  );
};

export default TVDetails;