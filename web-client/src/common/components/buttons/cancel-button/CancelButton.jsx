import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../main-button';

import './cancel-button.scss';

const CancelButton = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <Button
      className={classNames("cancel-button", className)}
      {...restProps}
    />
  );
}

export default CancelButton;