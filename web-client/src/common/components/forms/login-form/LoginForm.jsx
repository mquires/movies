import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import INPUT_TYPES from '../../../constants/input-types';
import { maxLength, minLength, required, validateEmail, validatePassword } from '../../../../utils/validators';

import Input from '../../input';
import Button from '../../button';
import EntryField from '../../fields/EntryField';

const maxLength30 = maxLength(30);
const minLength5 = minLength(5);

import './login-form.scss';

const LoginForm = (props) => {
  const {
    className,
    handleSubmit,
    error
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("form", className)}
    >
      {error &&
        <div className="form__error">{error}</div>
      }
      <div className="form__error">{error}</div>
      <EntryField
        name={"email"}
        component={Input}
        placeholder="E-mail"
        type={INPUT_TYPES.EMAIL}
        validate={[required, maxLength30, minLength5, validateEmail]}
      />
      <EntryField
        name={"password"}
        component={Input}
        placeholder="Password"
        type={INPUT_TYPES.PASSWORD}
        validate={[required, maxLength30, minLength5, validatePassword]}
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