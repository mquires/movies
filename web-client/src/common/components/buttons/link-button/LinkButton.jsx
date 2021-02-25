import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Icon from '../../icon';

import rightArrow from '../../../../assets/icons/right-arrow.svg';

import './link-button.scss';

const LinkButton = (props) => {
  const {
    className,
    navLink,
    onClick,
    children
  } = props;

  return (
    <NavLink onClick={onClick} to={navLink} className={classNames("link-button", className)}>
      {children}
      <Icon glyph={rightArrow.id} viewBox={rightArrow.viewBox} />
    </NavLink>
  );
}

export default LinkButton;
