import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './categories.scss';

const Categories = (props) => {
  const {
    className,
    title,
    children
  } = props;

  return (
    <div className={classNames("categories", className)}>
      <h3 className="categories__title">{title}</h3>
      <ul className="categories__list">
        {children}
      </ul>
    </div>
  );
};

export default Categories;