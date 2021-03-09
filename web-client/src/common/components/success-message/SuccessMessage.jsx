import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ErrorMessage from '../error-message';

import './success-message.scss';

const SuccessMessage = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <ErrorMessage
      className={classNames("success-message", className)}
      {...restProps}
    />
  );
};

export default SuccessMessage;