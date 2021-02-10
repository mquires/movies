import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Search from '../../search';

import './search-page-component.scss';

const SearchPageComponent = (props) => {
  const {
    className,
    title,
    children,
    onSubmit
  } = props;

  return (
    <section className={classNames('page-component', className)}>
      <div className="page-component__title-container search-page-component__title-container">
        <h2 className="page-component__title">
          {title}
        </h2>
        <Search onSubmit={onSubmit} />
      </div>
      <div className="page-component__content">
        {children}
      </div>
    </section>
  );
};

SearchPageComponent.propTypes = {
  className: PropTypes.string
}

SearchPageComponent.defaultProps = {
  className: undefined
}

export default SearchPageComponent;