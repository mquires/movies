import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field } from 'redux-form';
import INPUT_TYPES from '../../constants/input-types';

import './input.scss';

const Input = (props) => {
  const {
    className,
    name,
    type,
    component,
    placeholder,
    ...restProps
  } = props;

  return (
    <Field
      className={classNames('input', className)}
      id={name}
      name={name}
      type={type}
      component={component}
      placeholder={placeholder}
      {...restProps}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  component: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: INPUT_TYPES.TEXT,
  className: undefined,
  name: undefined,
  placeholder: undefined,
  component: 'input',
  id: undefined,
};

export default Input;