import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import INPUT_TYPES from '../../constants/input-types';

import FieldControl from '../fields/field-control';

import './input.scss';

const InputField = FieldControl('input');

const Input = (props) => {
  const {
    className,
    type,
    ...restProps
  } = props;

  return (
    <InputField
      className={classNames("input", className)}
      type={type}
      {...restProps}
    />
  )
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: undefined,
  type: INPUT_TYPES.TEXT
};