import React from 'react';
import classNames from 'classnames';

import Image from '../../components/image';
import Icon from '../../components/icon';

import './show-more-page-title.scss';

const ShowMorePageTitle = (props) => {
  const {
    className,
    showMorePageTitle,
    ...restProps
  } = props;

  return (
    <div className={classNames("show-more-page-title", className)}>
      <Image
        {...restProps}
        className="show-more-page-title__image"
      />
      <div className="show-more-page-title__title">
        <div className="show-more-page-title__title-content">
          <div className="show-more-page-title__icon-container">
            <Icon
              className="show-more-page-title__icon"
              {...restProps}
            />
          </div>
          <h3 className="show-more-page-title__title-text">{showMorePageTitle}</h3>
        </div>
      </div>
    </div>
  )
}

export default ShowMorePageTitle;