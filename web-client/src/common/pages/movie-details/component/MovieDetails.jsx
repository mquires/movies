import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Image from '../../../components/image';
import Avatar from '../../../components/avatar';
import ROUTES from '../../../constants/routes';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';
import TrendsItem from '../../../components/trends-item';

import './movie-details.scss';
import ActorItem from '../../../components/items/actor-item';
import MovieTvItem from '../../../components/items/movie-tv-item';
import Icon from '../../../components/icon';

import moneyIcon from '../../../../assets/icons/money.svg';
import languageIcon from '../../../../assets/icons/language.svg';

const MovieDetails = (props) => {
  const {
    className,
    popularPersons
  } = props;

  const popularPersonsList = popularPersons.map((popularPerson, index) => (
    <ActorItem
      id={popularPerson.id}
      key={index}
      className="section-items__item"
      title={popularPerson.name}
      src={`http://image.tmdb.org/t/p/w1280/${popularPerson.profile_path}`}
      alt={popularPerson.name}
    />
  ));

  return (
    <section className={classNames("movie-details", className)}>
      <div className="movie-details__background">
        <Image
          className="movie-details__background-image"
          src="http://image.tmdb.org/t/p/w1280/5aXp2s4l6g5PcMMesIj63mx8hmJ.jpg"
          alt="Background"
        />
        <h2 className="movie-details__title">Fight Club</h2>
      </div>
      <div className="movie-details__container">
        <div className="movie-details__info-wrapper">
          <div className="movie-details__info">
            <div className="movie-details__poster-container">
              <div>
                <div className="movie-details__section-info">
                  <ul className="movie-details__keywords-list">
                    <li className="movie-details__secondary-info-item">
                      <Icon
                        className="movie-details__icon"
                        glyph={moneyIcon.id}
                        viewBox={moneyIcon.viewBox}
                      />
                      <p>6300000$</p>
                    </li>
                    <li className="movie-details__secondary-info-item">
                      <Icon
                        className="movie-details__icon"
                        glyph={languageIcon.id}
                        viewBox={languageIcon.viewBox}
                      />
                      <p>EN</p>
                    </li>
                  </ul>
                </div>
                <div className="movie-details__section-info">
                  <h3 className="movie-details__section-info-title">Keywords</h3>
                  <ul className="movie-details__keywords-list">
                    <li className="movie-details__keyword">keyword</li>
                    <li className="movie-details__keyword">keyword</li>
                    <li className="movie-details__keyword">keyword</li>
                  </ul>
                </div>
                <div className="movie-details__section-info">
                  <h3 className="movie-details__section-info-title">About</h3>
                  <p className="movie-details__section-info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
              <Image
                className="movie-details__poster"
                src="http://image.tmdb.org/t/p/w1280/rYFAvSPlQUCebayLcxyK79yvtvV.jpg"
                alt="Poster"
              />
            </div>
            <SectionInfoSeeAll title="Pictures" navLink={ROUTES.MAIN} className="movie-details__section-info">
              <ul className="movie-details__pictures-list">
                <li className="movie-details__picture-item">
                  <Image className="movie-details__picture" src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg" alt="picture" />
                </li>
                <li className="movie-details__picture-item">
                  <Image className="movie-details__picture" src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg" alt="picture" />
                </li>
                <li className="movie-details__picture-item">
                  <Image className="movie-details__picture" src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg" alt="picture" />
                </li>
                <li className="movie-details__picture-item">
                  <Image className="movie-details__picture" src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg" alt="picture" />
                </li>
                <li className="movie-details__picture-item">
                  <Image className="movie-details__picture" src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg" alt="picture" />
                </li>
                <li className="movie-details__picture-item">
                  <Image className="movie-details__picture" src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg" alt="picture" />
                </li>
                <li className="movie-details__picture-item">
                  <Image className="movie-details__picture" src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg" alt="picture" />
                </li>
              </ul>
            </SectionInfoSeeAll>
            <div className="movie-details__section-info">
              <h3 className="movie-details__section-info-title">Similar movies</h3>
              <ul className="movie-details__similar-movies-list">
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
              </ul>
            </div>
            <div className="movie-details__section-info">
              <h3 className="movie-details__section-info-title">Production companies</h3>
              <ul className="movie-details__similar-movies-list">
                <MovieTvItem
                  title="Name name"
                  src="http://image.tmdb.org/t/p/w1280/qZCc1lty5FzX30aOCVRBLzaVmcp.png"
                  alt="picture"
                />
                <MovieTvItem
                  title="Name name"
                  src="http://image.tmdb.org/t/p/w1280/qZCc1lty5FzX30aOCVRBLzaVmcp.png"
                  alt="picture"
                />
                <MovieTvItem
                  title="Name name"
                  src="http://image.tmdb.org/t/p/w1280/qZCc1lty5FzX30aOCVRBLzaVmcp.png"
                  alt="picture"
                />
                <MovieTvItem
                  title="Name name"
                  src="http://image.tmdb.org/t/p/w1280/qZCc1lty5FzX30aOCVRBLzaVmcp.png"
                  alt="picture"
                />
              </ul>
            </div>
            <div className="movie-details__section-info">
              <h3 className="movie-details__section-info-title">Recommendations</h3>
              <ul className="movie-details__similar-movies-list">
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
                <li className="movie-details__similar-movie-item">
                  <TrendsItem
                    name="Name name"
                    releaseDate="11/23/2000"
                    src="http://image.tmdb.org/t/p/w1280/vzhheEeIACi0CKO8YhDsr8nQ0qW.jpg"
                    alt="picture"
                  />
                </li>
              </ul>
            </div>
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
          <NavLink to={ROUTES.MAIN} className="movie-details__actor">
            <Avatar
              src="http://www.gstatic.com/tv/thumb/persons/435/435_v9_bc.jpg"
              alt="Actor"
            />
            <p>Leonardo Di</p>
          </NavLink>
          <NavLink to={ROUTES.MAIN} className="movie-details__actor">
            <Avatar
              src="http://www.gstatic.com/tv/thumb/persons/435/435_v9_bc.jpg"
              alt="Actor"
            />
            <p>Leonardo Di</p>
          </NavLink>
          <NavLink to={ROUTES.MAIN} className="movie-details__actor">
            <Avatar
              src="http://www.gstatic.com/tv/thumb/persons/435/435_v9_bc.jpg"
              alt="Actor"
            />
            <p>Leonardo Di</p>
          </NavLink>
          <NavLink to={ROUTES.MAIN} className="movie-details__actor">
            <Avatar
              src="http://www.gstatic.com/tv/thumb/persons/435/435_v9_bc.jpg"
              alt="Actor"
            />
            <p>Leonardo Di</p>
          </NavLink>
          <NavLink to={ROUTES.MAIN} className="movie-details__actor">
            <Avatar
              src="http://www.gstatic.com/tv/thumb/persons/435/435_v9_bc.jpg"
              alt="Actor"
            />
            <p>Leonardo Di</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;