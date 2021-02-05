import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FieldControl from '../fields/field-control';

import './input.scss';

const InputField = FieldControl('input');

const Input = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <InputField
      className={classNames("input", className)}
      {...restProps}
    />
  )
};

export default Input;

Input.propTypes = {
  className: PropTypes.string
};

Input.defaultProps = {
  className: undefined
};