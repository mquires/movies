import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Image from '../../image';

import './show-more-item.scss';

const ShowMoreItem = (props) => {
  const {
    className,
    title,
    navLink,
    ...restProps
  } = props;

  return (
    <NavLink to={navLink}>
      <article className={classNames("show-more-item", className)}>
        <div className='trends-item-cover'>
          <Image
            {...restProps}
            className="trends-item-cover__image show-more-item__image"
          />
          <h3 className="show-more-item__title">{title}</h3>
        </div>
      </article>
    </NavLink>
  );
};

export default ShowMoreItem;