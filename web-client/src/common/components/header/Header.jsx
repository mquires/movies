import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../button';

import './header.scss';

const Header = (props) => {
  const {
    className
  } = props;

  return (
    <header className={classNames('header', className)}>
      <div className="header__container">
        <h1>Movies</h1>
        <Button caption="Login" />
      </div>
    </header>
  );
}

export default Header;