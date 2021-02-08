import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import ROUTES from '../../constants/routes';

import './logo.scss';

const Logo = (props) => {
  const {
    className
  } = props;

  return (
    <div className={classNames("logo", className)}>
      <NavLink className="logo__link" to={ROUTES.MAIN}>
        <h1>Movies</h1>
      </NavLink>
    </div>
  );
};

export default Logo;