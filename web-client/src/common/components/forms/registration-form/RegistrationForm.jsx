import React from 'react';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import INPUT_TYPES from '../../../constants/input-types';
import { maxLength, minLength, required, validateEmail, validatePassword } from '../../../../utils/validators';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';

import './registration-form.scss';

const maxLength30 = maxLength(30);
const minLength5 = minLength(5);

const RegistrationForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <EntryField
        name={"name"}
        component={Input}
        placeholder="Your name"
        validate={[required, maxLength30, minLength5]}
      />
      <EntryField
        name={"email"}
        component={Input}
        placeholder="Your e-mail"
        validate={[required, maxLength30, minLength5, validateEmail]}
      />
      <EntryField
        name={"password"}
        component={Input}
        placeholder="Your password"
        type={INPUT_TYPES.PASSWORD}
        validate={[required, maxLength30, minLength5, validatePassword]}
      />
      <EntryField
        name={"confirmPassword"}
        component={Input}
        placeholder="Confirm your password"
        type={INPUT_TYPES.PASSWORD}
        validate={[required, maxLength30, minLength5, validatePassword]}
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