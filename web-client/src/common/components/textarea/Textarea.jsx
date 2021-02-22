import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import INPUT_TYPES from '../../constants/input-types';

import FieldControl from '../fields/field-control';

import './textarea.scss';

const TextareaField = FieldControl('textarea');

const Textarea = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <TextareaField
      className={classNames("input textarea", className)}
      {...restProps}
    />
  )
};

export default Textarea;

Textarea.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Textarea.defaultProps = {
  className: undefined,
  type: INPUT_TYPES.TEXT
};