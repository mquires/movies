import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import Icon from '../../icon';

import './sidebar-link.scss';

const SidebarLink = (props) => {
  const {
    className,
    caption,
    exact,
    ...restProps
  } = props;

  return (
    <NavLink
      className={classNames('sidebar-link', className)}
      exact={exact && exact}
      {...restProps}
    >
      <Icon
        className="sidebar-link__icon"
        {...restProps}
      />
      {caption}
    </NavLink>
  );
}

export default SidebarLink;

SidebarLink.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  exact: PropTypes.objectOf(PropTypes.any),
};

SidebarLink.defaultProps = {
  className: undefined,
  caption: undefined,
  exact: undefined,
};
