import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import INPUT_TYPES from '../../constants/input-types';

const Input = (props) => {
  const {
    className,
    name,
    type,
    value,
    onChange,
    placeholder,
    ...restProps
  } = props;

  return (
    <input
      className={classNames('input', className)}
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: INPUT_TYPES.TEXT,
  className: undefined,
  name: undefined,
  placeholder: undefined,
  id: undefined,
  value: undefined,
  onChange: undefined,
};

export default Input;