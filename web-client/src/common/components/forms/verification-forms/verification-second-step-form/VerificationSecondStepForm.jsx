import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../../constants/button-types';

import Button from '../../../buttons/main-button';
import EntryField from '../../../fields/EntryField';
import Select from '../../../select';

import './verification-second-step-form.scss';

const VerificationSecondStepForm = (props) => {
  const {
    className,
    handleSubmit
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("form", className)}
    >
      <EntryField
        component={Select}
        name="category"
      >
        <option disabled>Select category</option>
        <option value="Business">Business</option>
        <option value="Creator">Creator</option>
      </EntryField>
      <EntryField
        component={Select}
        name="country"
      >
        <option disabled>Select country</option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Armenia">Armenia</option>
        <option value="Georgia">Georgia</option>
        <option value="Israel">Israel</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
        <option value="Latvia">Latvia</option>
        <option value="France">France</option>
      </EntryField>
      <Button
        className="verification-second-step-form__button"
        caption="Continue"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

export default reduxForm({ form: 'verificationSecondStep' })(VerificationSecondStepForm);