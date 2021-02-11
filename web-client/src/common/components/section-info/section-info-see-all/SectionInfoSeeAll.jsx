import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './section-info-see-all.scss';

const SectionInfoSeeAll = (props) => {
  const {
    className,
    title,
    navLink,
    children
  } = props;

  return (
    <div className={classNames("section-info", className)}>
      <div className="section-info-see-all__title-container">
        <h3 className="section-info__title">{title}</h3>
        <NavLink
          className="section-info-see-all__link"
          to={navLink}
        >
          See All
        </NavLink>
      </div>
      <div className="section-info__container">
        {children}
      </div>
    </div>
  );
};

export default SectionInfoSeeAll;