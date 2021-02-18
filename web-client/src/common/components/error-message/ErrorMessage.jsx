import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './error-message.scss';

const ErrorMessage = (props) => {
  const {
    className,
    message
  } = props;

  return (
    <div className={classNames("error-message", className)}>
      <span className="error-message__text">
        {message}
      </span>
    </div>
  );
};

export default ErrorMessage;