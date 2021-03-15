import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Icon from '../../../components/icon';

import './nav-page-item.scss';

const NavPageItem = (props) => {
  const {
    className,
    caption,
    navLink,
    ...restProps
  } = props;

  return (
    <NavLink
      to={navLink}
      className={classNames("nav-page-item__nav-item", className)}
    >
      <Icon
        className="nav-page-item__nav-item-icon"
        {...restProps}
      />
      {caption}
    </NavLink>
  );
};

export default NavPageItem;