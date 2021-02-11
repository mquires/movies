import React from 'react';
import PropTypes from 'prop-types';

import ShowMoreItem from '../../../components/items/show-more-item';
import Footer from '../../../components/footer';

import topWeeksMovies from '../../../../assets/images/top_weeks_movies.jpg';
import topWeeksSerials from '../../../../assets/images/top_weeks_serials.jpg';
import topRatedTV from '../../../../assets/images/top_rated_tv.jpg';
import theMostPopularActors from '../../../../assets/images/the_most_popular_actors.jpg';
import theBestActorsToday from '../../../../assets/images/the_best_actors_today.jpg';
import upcomingMovies from '../../../../assets/images/upcoming_movies.jpg';
import theLatestMovies from '../../../../assets/images/the_latest.png';

import './show-more.scss';
import ROUTES from '../../../constants/routes';

const ShowMore = () => {
  return (
    <div className="show-more__wrapper">
      <section className="show-more">
        <h2 className="show-more__title">Show more</h2>
        <div className="show-more__container">
          <ShowMoreItem
            title="Top week's movies"
            navLink={ROUTES.POPULAR_PERSONS}
            src={topWeeksMovies}
            alt="Top week's movies"
          />
          <ShowMoreItem
            title="Top week's serials"
            navLink={ROUTES.POPULAR_PERSONS}
            src={topWeeksSerials}
            alt="Top week's serials"
          />
          <ShowMoreItem
            title="Top rated TV Shows"
            navLink={ROUTES.POPULAR_PERSONS}
            src={topRatedTV}
            alt="Top rated TV Shows"
          />
          <ShowMoreItem
            title="The most popular actors"
            navLink={ROUTES.POPULAR_PERSONS}
            src={theMostPopularActors}
            alt="The most popular actors"
          />
          <ShowMoreItem
            title="The best actors today"
            navLink={ROUTES.POPULAR_PERSONS}
            src={theBestActorsToday}
            alt="The best actors today"
          />
          <ShowMoreItem
            title="Upcoming movies"
            navLink={ROUTES.UPCOMING_MOVIES}
            src={upcomingMovies}
            alt="Upcoming movies"
          />
          <ShowMoreItem
            title="The latest movies"
            navLink={ROUTES.POPULAR_PERSONS}
            src={theLatestMovies}
            alt="Latest movies"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShowMore;