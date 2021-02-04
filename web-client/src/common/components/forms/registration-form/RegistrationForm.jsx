import React from 'react';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import INPUT_TYPES from '../../../constants/input-types';

import Input from '../../input';
import Button from '../../button';

import './registration-form.scss';

const RegistrationForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <Input
        name={"name"}
        placeholder="Your name"
      />
      <Input
        name={"email"}
        placeholder="Your e-mail"
        type={INPUT_TYPES.EMAIL}
      />
      <Input
        name={"password"}
        placeholder="Your password"
        type={INPUT_TYPES.PASSWORD}
      />
      <Button
        caption="Sign up"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm);

export default RegistrationReduxForm;