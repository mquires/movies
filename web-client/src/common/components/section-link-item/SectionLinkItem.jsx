import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import Icon from '../icon';

import './section-link-item.scss';

const SectionLinkItem = (props) => {
  const {
    className,
    title,
    navLink,
    ...restProps
  } = props;

  return (
    <NavLink
      className={classNames("section-link-item", className)}
      to={navLink}
    >
      <Icon
        className="section-link-item__icon"
        {...restProps}
      />
      <h4>{title}</h4>
    </NavLink>
  );
};

export default SectionLinkItem;