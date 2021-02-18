import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '../main-button';
import Icon from '../../icon';

import play from '../../../../assets/icons/play.svg';

import './play-button.scss';

export default function PlayButton(props) {
  const {
    className,
    navPlayButtonLink
  } = props;

  return (
    <NavLink to={navPlayButtonLink}>
      <Button
        className={classNames('play-button', className)}
      >
        <Icon
          className="play-button__icon"
          glyph={play.id}
          viewBox={play.viewBox}
        />
      </Button>
    </NavLink>
  );
}

PlayButton.propTypes = {
  className: PropTypes.string,
};

PlayButton.defaultProps = {
  className: undefined,
};
