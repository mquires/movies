import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import INPUT_TYPES from '../../constants/input-types';

import FieldControl from '../fields/field-control';

import './input.scss';

const SelectField = FieldControl('select');

const Select = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <SelectField
      className={classNames("input select", className)}
      {...restProps}
    />
  )
};

export default Select;

Select.propTypes = {
  className: PropTypes.string
};

Select.defaultProps = {
  className: undefined
};