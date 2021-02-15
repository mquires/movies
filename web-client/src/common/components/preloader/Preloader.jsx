import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../image';

import preloader from '../../../assets/images/preloader.gif';

import './preloader.scss';

export default function Preloader(props) {
  const {
    className
  } = props;

  return (
    <Image
      className={classNames('preloader', className)}
      src={preloader}
      alt="Preloader"
    />
  );
};

Preloader.propTypes = {
  className: PropTypes.string
};

Preloader.defaultProps = {
  className: undefined
};

