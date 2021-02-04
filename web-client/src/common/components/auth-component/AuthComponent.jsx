import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageComponent from '../../components/page-component';

import './auth-component.scss';

const AuthComponent = (props) => {
  const {
    className,
    title,
    children
  } = props;

  return (
    <PageComponent
      className={classNames("auth-component", className)}
      title={title}
    >
      {children}
    </PageComponent>
  );
};

export default AuthComponent;