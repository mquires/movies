import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Image from '../../image';
import Item from '../item';

import noPhoto from '../../../../assets/images/no-photo.png';

import './actor-item.scss';

const ActorItem = (props) => {
  const {
    className,
    navLink,
    ...restProps
  } = props;

  return (
    <NavLink to={navLink} className={classNames("actor-item", className)}>
      <Item
        {...restProps}
      >
        <Image
          className="actor-item__image"
          onError={(e) => e.target.src = noPhoto}
          {...restProps}
        />
        <p className="actor-item__category">artist</p>
      </Item>
    </NavLink>
  );
};

export default ActorItem;