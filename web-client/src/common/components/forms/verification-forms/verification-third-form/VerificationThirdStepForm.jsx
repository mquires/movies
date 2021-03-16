import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../../constants/button-types';

import Button from '../../../buttons/main-button';
import EntryField from '../../../fields/EntryField';
import Textarea from '../../../textarea';
import Input from '../../../input';

import './verification-third-step-form.scss';

const VerificationThirdStepForm = (props) => {
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
        component={Textarea}
        name="general"
        placeholder="General information"
      />
      <p className="verification-third-step-form__text">Tell us about yourself or your company.
         Provide links to media publications from the past year and any other information that confirms your notability.</p>
      <EntryField
        component={Input}
        name="wikiArticle"
        placeholder="Wikipedia article URL"
      />
      <Button
        className="verification-third-step-form__button"
        caption="Next"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

export default reduxForm({ form: 'verificationThirdStep' })(VerificationThirdStepForm);