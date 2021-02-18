import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import Image from '../../image';
import PlayButton from '../../buttons/play-button';

import './trends-item-cover.scss';

const TrendsItemCover = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <div className={classNames('trends-item-cover', className)}>
      <Image
        {...restProps}
        className="trends-item-cover__image"
      />
      <div className="trends-item-cover__content">
        <PlayButton {...restProps} />
      </div>
    </div>
  );
};

export default TrendsItemCover;

TrendsItemCover.propTypes = {
  className: propTypes.string,
};

TrendsItemCover.defaultProps = {
  className: undefined,
};
