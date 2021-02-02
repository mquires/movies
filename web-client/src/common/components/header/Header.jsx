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
        <div className="header__logo">
          <h1>Movies</h1>
        </div>
        <div className="header__info">
          <Button caption="Login" />
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