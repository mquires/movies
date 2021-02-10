import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import Button from '../buttons/main-button';
import AuthUserNav from '../auth-user-nav';

import './header.scss';

const Header = (props) => {
  const {
    className,
    isAuth,
    onLogout
  } = props;

  return (
    <header className={classNames('header', className)}>
      <div className="header__info">
        {
          isAuth ?
            <div className="header__user">
              <AuthUserNav />
              <Button onClick={onLogout} caption="Logout" />
            </div> :
            <NavLink to={ROUTES.LOGIN}>
              <Button caption="Login" />
            </NavLink>
        }
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