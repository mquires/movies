import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './centered-page-component.scss';

const AuthComponent = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <section className={classNames('centered-page-component', className)}>
      <div className="centered-page-component__content">
        {children}
      </div>
    </section>
  );
};

export default AuthComponent;