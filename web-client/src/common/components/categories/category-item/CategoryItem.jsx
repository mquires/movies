import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../../../components/icon';

import arrowIcon from '../../../../assets/icons/right-arrow.svg';

import './category-item.scss';

const CategoryItem = (props) => {
  const {
    className,
    categoryTitle
  } = props;

  return (
    <li className={classNames("category-item", className)}>
      <div className="category-item__container">
        <p>{categoryTitle}</p>
        <Icon
          className="category-item__icon"
          glyph={arrowIcon.id}
          viewBox={arrowIcon.viewBox}
        />
      </div>
    </li>
  );
}

CategoryItem.propTypes = {
  className: PropTypes.string
}

CategoryItem.defaultProps = {
  className: undefined
}

export default CategoryItem;