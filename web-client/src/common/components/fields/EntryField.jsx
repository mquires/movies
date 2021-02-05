import React from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const EntryField = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <Field
      className={classNames('entry-field', className)}
      {...restProps}
    />
  );
}

export default EntryField;

EntryField.propTypes = {
  className: PropTypes.string
};

EntryField.defaultProps = {
  className: undefined
};