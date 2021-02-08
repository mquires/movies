import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './page-component.scss';

const PageComponent = (props) => {
  const {
    className,
    title,
    children
  } = props;

  return (
    <section className={classNames('page-component', className)}>
      <div className="page-component__title-container">
        <h2 className="page-component__title">
          {title}
        </h2>
      </div>
      <div className="page-component__content">
        {children}
      </div>
    </section>
  );
};

PageComponent.propTypes = {
  className: PropTypes.string
}

PageComponent.defaultProps = {
  className: undefined
}

export default PageComponent;