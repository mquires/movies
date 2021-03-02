import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Search from '../search';
import Preloader from '../preloader';
import CategoryItem from '../categories/category-item';

import './section-info.scss';

const SectionInfo = (props) => {
  const {
    className,
    title,
    children,
    genres,
    onClick,
    onChange,
    onResetClick,
    onSubmit
  } = props;

  const genresList = genres.map((genre, index) => (
    <CategoryItem
      id={genre.id}
      key={index}
      categoryTitle={genre.name}
      onClick={() => onClick(genre.id)}
    />
  ));

  return (
    <>
      {
        !genres ?
          <Preloader /> :
          <div className={classNames("section-info", className)}>
            <div className="section-info__title-container">
              <h3 className="section-info__title">{title}</h3>
            </div>
            <Search
              className="section-info__search"
              onChange={onChange}
              onSubmit={onSubmit}
            />
            <div className="section-info__container">
              <div className="section-info__wrapper">
                <div className="section-info__genres">
                  {genresList}
                  <CategoryItem
                    className="section-info__reset"
                    categoryTitle="Reset"
                    onClick={() => onResetClick()}
                  />
                </div>
                <div className="section-info__container-content">
                  {children}
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default SectionInfo;