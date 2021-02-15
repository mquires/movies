import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';

import Preloader from '../../../components/preloader';

import './section-page-no-search.scss';

const SectionPageNoSearch = (props) => {
  const {
    className,
    children,
    title,
    onEnter
  } = props;

  return (
    <section className={classNames('page-component', className)}>
      <h2 className="section-page-no-search__title">
        {title}
      </h2>
      <div className="section-page-no-search__container">
        {children}
      </div>
      <Waypoint
        onEnter={onEnter}
      >
        <div>
          <Preloader />
        </div>
      </Waypoint>
    </section>
  );
};

export default SectionPageNoSearch;