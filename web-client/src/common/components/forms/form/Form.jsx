import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../../button';
import BUTTON_TYPES from '../../../constants/button-types';

import INPUT_TYPES from '../../../constants/input-types';

import Input from '../../input';

import { reduxForm } from 'redux-form';

const Form = (props) => {
  const {
    className,
    handleSubmit,
    children
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("form", className)}
    >
      {children}
    </form>
  );
};

export default reduxForm({})(Form);