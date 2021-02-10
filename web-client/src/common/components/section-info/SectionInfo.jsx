import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './section-info.scss';

const SectionInfo = (props) => {
  const {
    className,
    title,
    children
  } = props;

  return (
    <div className={classNames("section-info", className)}>
      <div className="section-info__title-container">
        <h3 className="section-info__title">{title}</h3>
      </div>
      <div className="section-info__container">
        {children}
      </div>
    </div>
  );
};

export default SectionInfo;