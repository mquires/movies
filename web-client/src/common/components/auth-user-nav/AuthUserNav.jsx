import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import Avatar from '../avatar';
import Icon from '../icon';

import userIcon from '../../../assets/icons/user.svg';
import adminIcon from '../../../assets/icons/admin_panel.svg';
import noAvatar from '../../../assets/images/no-avatar.jpg';

import './auth-user-nav.scss';

const AuthUserNav = (props) => {
  const {
    className
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={classNames("auth-user-nav", className)}>
      <div
        className="auth-user-nav__avatar-container"
        onClick={toggleMenu}
      >
        <Avatar
          className="auth-user-nav__avatar"
          src={localStorage.getItem('avatarImage') == "null" ? noAvatar : localStorage.getItem('avatarImage')}
          alt={localStorage.getItem('email')}
        />
      </div>
      {
        isOpen &&
        <ul className="auth-user-nav__list">
          <li
            className="auth-user-nav__list-item"
            onClick={closeMenu}
          >
            <NavLink
              className="auth-user-nav__list-item-link"
              to={ROUTES.PROFILE}
            >
              <Icon
                glyph={userIcon.id}
                viewBox={userIcon.viewBox}
              />
              My profile
              </NavLink>
          </li>
          <li
            className="auth-user-nav__list-item"
            onClick={closeMenu}
          >
            <NavLink
              className="auth-user-nav__list-item-link"
              to={ROUTES.ADMIN_PANEL}
            >
              <Icon
                glyph={adminIcon.id}
                viewBox={adminIcon.viewBox}
              />
              Admin panel
              </NavLink>
          </li>
        </ul>
      }
    </div>
  );
}

AuthUserNav.propTypes = {
  className: PropTypes.string
}

AuthUserNav.defaultProps = {
  className: undefined
}

export default withRouter(AuthUserNav);