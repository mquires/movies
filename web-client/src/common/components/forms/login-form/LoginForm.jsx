import React from 'react';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import INPUT_TYPES from '../../../constants/input-types';

import Input from '../../input';
import Button from '../../button';

import './login-form.scss';

const LoginForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <Input
        name={"email"}
        placeholder="E-mail"
        type={INPUT_TYPES.EMAIL}
      />
      <Input
        name={"password"}
        placeholder="Password"
        type={INPUT_TYPES.PASSWORD}
      />
      <Button
        caption="Sign in"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;