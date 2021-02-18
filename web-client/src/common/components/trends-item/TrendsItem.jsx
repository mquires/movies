import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import TrendsItemCover from './trends-item-cover';

import './trends-item.scss';

const TrendsItem = (props) => {
  const {
    className,
    name,
    releaseDate,
    navLink,
    ...restProps
  } = props;

  return (
    <div className={classNames('trends-item', className)}>
      <TrendsItemCover {...restProps} />
      <div className="trends-item__info">
        <NavLink
          to={navLink}
          className="trends-item__name"
        >
          {name}
        </NavLink>
        <NavLink
          to={navLink}
          className="trends-item__release-date"
        >
          {releaseDate}
        </NavLink>
      </div>
    </div>
  );
};

export default TrendsItem;

TrendsItem.propTypes = {
  className: PropTypes.string,
  albumName: PropTypes.string,
  authorName: PropTypes.string,
  listenings: PropTypes.string,
};

TrendsItem.defaultProps = {
  className: undefined,
  albumName: undefined,
  authorName: undefined,
  listenings: undefined,
};
