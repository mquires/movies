import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './nav-page.scss';

const NavPage = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <ul className={classNames("nav-page__nav-list", className)}>
      {children}
    </ul>
  );
};

export default NavPage;