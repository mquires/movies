import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../../constants/button-types';

import Button from '../../../buttons/main-button';
import EntryField from '../../../fields/EntryField';
import Input from '../../../input';

const VerificationFourthStepForm = (props) => {
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
        component={Input}
        name="website"
        placeholder="Enter your website's URL"
      />
      <EntryField
        component={Input}
        name="socialNetworks"
        placeholder="Social networks"
      />
      <p className="verification-third-step-form__text">Enter URLs to your profiles or
       your project's pages on other websites.</p>
      <Button
        className="verification-third-step-form__button"
        caption="Submit application"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

export default reduxForm({ form: 'verificationFourthStep' })(VerificationFourthStepForm);