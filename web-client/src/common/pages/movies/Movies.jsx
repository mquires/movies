import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import PageComponent from '../../components/page-component';
import MovieItem from '../../components/movie-item';

import './movies.scss';

const Movies = () => {
  return (
    <PageComponent
      className="movies"
      title="Movies"
    >
      <div className="movies__container">
        <MovieItem
          movieName="Film"
          src="https://media.kg-portal.ru/movies/k/kapitanmarvel/posters/kapitanmarvel_35.jpg"
          movieOverview="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contain"
          language="EN"
          releaseDate="12/12/2000"
          alt="Film"
        />
        <MovieItem
          movieName="Film"
          src="https://media.kg-portal.ru/movies/k/kapitanmarvel/posters/kapitanmarvel_35.jpg"
          movieOverview="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contain"
          language="EN"
          releaseDate="12/12/2000"
          alt="Film"
        />
        <MovieItem
          movieName="Film"
          src="https://media.kg-portal.ru/movies/k/kapitanmarvel/posters/kapitanmarvel_35.jpg"
          movieOverview="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contain"
          language="EN"
          releaseDate="12/12/2000"
          alt="Film"
        />
      </div>
    </PageComponent>
  );
};

export default Movies;