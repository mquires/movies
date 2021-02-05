import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ROUTES from '../../constants/routes';

import './sidebar.scss';

const Sidebar = (props) => {
  const {
    className
  } = props;

  return (
    <nav className={classNames('sidebar', className)}>
      <div className="sidebar__nav">
        <div className="sidebar__nav-links">
          <NavLink
            className={classNames('sidebar__nav-link', className)}
            activeClassName={classNames('sidebar__nav-link-active', className)}
            to={ROUTES.MOVIES}
          >
            Movies
          </NavLink>
          <NavLink
            className={classNames('sidebar__nav-link', className)}
            activeClassName={classNames('sidebar__nav-link-active', className)}
            to={ROUTES.TV}
          >
            TV Series
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string
};

Sidebar.defaultProps = {
  className: undefined
};

export default Sidebar;
