import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../image';

import './avatar.scss';

const Avatar = (props) => {
  const {
    className
  } = props;

  return (
    <Image
      className={classNames("avatar", className)}
      src="https://off-cs.ru/upload/2018/06/1451529920117.jpeg"
      alt="avatar"
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string
}

Avatar.defaultProps = {
  className: undefined
}

export default Avatar;