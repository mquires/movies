import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ROUTES from '../../constants/routes';

import Logo from '../logo';
import SidebarLink from './sidebar-link';
import Search from '../search';

import moviesIcon from '../../../assets/icons/movies.svg';
import tvIcon from '../../../assets/icons/tv.svg';
import showMoreIcon from '../../../assets/icons/show-more.svg';

import './sidebar.scss';

const Sidebar = (props) => {
  const {
    className
  } = props;

  return (
    <nav className={classNames('sidebar', className)}>
      <Logo />
      <div className="sidebar__links">
        <Search className="sidebar__search" />
        <SidebarLink
          glyph={moviesIcon.id}
          viewBox={moviesIcon.viewBox}
          className={classNames('sidebar__nav-link', className)}
          activeClassName={classNames('sidebar__nav-link-active', className)}
          to={ROUTES.MOVIES}
          caption="Movies"
        />
        <SidebarLink
          glyph={tvIcon.id}
          viewBox={tvIcon.viewBox}
          className={classNames('sidebar__nav-link', className)}
          activeClassName={classNames('sidebar__nav-link-active', className)}
          to={ROUTES.TV}
          caption="TV Series"
        />
        <SidebarLink
          glyph={showMoreIcon.id}
          viewBox={showMoreIcon.viewBox}
          className={classNames('sidebar__nav-link', className)}
          activeClassName={classNames('sidebar__nav-link-active', className)}
          to={ROUTES.SHOW_MORE}
          caption="Show more"
        />
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
