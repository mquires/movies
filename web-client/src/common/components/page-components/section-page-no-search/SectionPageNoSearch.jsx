import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './section-page-no-search.scss';

const SectionPageNoSearch = (props) => {
  const {
    className,
    children,
    title
  } = props;

  return (
    <section className={classNames('page-component', className)}>
      <h2 className="section-page-no-search__title">
        {title}
      </h2>
      <div className="section-page-no-search__container">
        {children}
      </div>
    </section>
  );
};

export default SectionPageNoSearch;