import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SearchPageComponent from '../../../components/page-components/search-page-component';

import './section-page.scss';

const SectionPage = (props) => {
  const {
    className,
    children,
    ...restProps
  } = props;

  return (
    <SearchPageComponent
      className={classNames("section-page", className)}
      {...restProps}
    >
      <div className="section-page__container">
        {children}
      </div>
    </SearchPageComponent>
  );
};

export default SectionPage;