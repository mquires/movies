import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import ROUTES from '../../constants/routes';

import Icon from '../icon';

import logoIcon from '../../../assets/icons/logo.svg';

import './logo.scss';

const Logo = (props) => {
  const {
    className
  } = props;

  return (
    <div className={classNames("logo", className)}>
      <NavLink className="logo__link" to={ROUTES.MAIN}>
        <Icon
          className="logo__icon"
          glyph={logoIcon.id}
          viewBox={logoIcon.viewBox}
        />
        <h1>Movies</h1>
      </NavLink>
    </div>
  );
};

export default Logo;