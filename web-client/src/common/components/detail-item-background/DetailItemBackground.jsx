import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../../../components/image';

import noBackground from '../../../../assets/images/no-background.png';

import './detail-item-background.scss';

const DetailItemBackground = (props) => {
  const {
    className,
    backgroundImage,
    title
  } = props;

  return (
    <div className={classNames("detail-item__background", className)}>
      <Image
        className="detail-item__background-image"
        src={`http://image.tmdb.org/t/p/w1280${backgroundImage}`}
        alt="Background"
        onError={(e) => e.target.src = noBackground}
      />
      <h2 className="detail-item__title">{title}</h2>
    </div>
  );
};

export default DetailItemBackground;