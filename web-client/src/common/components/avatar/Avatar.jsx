import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../image';

import './avatar.scss';

const Avatar = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <Image
      className={classNames("avatar", className)}
      {...restProps}
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