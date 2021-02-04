import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import Button from '../button';

import './header.scss';

const Header = (props) => {
  const {
    className
  } = props;

  return (
    <header className={classNames('header', className)}>
      <div className="header__container">
        <div className="header__logo">
          <NavLink className="header__logo-link" to={ROUTES.MAIN}>
            <h1>Movies</h1>
          </NavLink>
        </div>
        <div className="header__info">
          <NavLink to={ROUTES.LOGIN}>
            <Button caption="Login" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string
}

Header.defaultProps = {
  className: undefined
}

export default Header;