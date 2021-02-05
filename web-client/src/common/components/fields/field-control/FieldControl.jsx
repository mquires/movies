import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './field-control.scss';

const FieldControl = (Component) => (props) => {

  const {
    className,
    input,
    meta,
    ...restProps
  } = props;

  const isError = meta.error && meta.touched;

  return (
    <div className="field-control">
      {
        isError && <div className="field-control__error">{meta.error}</div>
      }
      <Component
        className={className}
        {...input}
        {...restProps}
      />
    </div>
  );
};

export default FieldControl;
