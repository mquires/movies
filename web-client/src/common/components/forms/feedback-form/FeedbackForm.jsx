import React from 'react';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import INPUT_TYPES from '../../../constants/input-types';
import { required, validateEmail } from '../../../../utils/validators';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import Textarea from '../../textarea';
import Select from '../../select';

const FeedbackForm = (props) => {
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
        validate={[required]}
      />
      <EntryField
        name={"email"}
        component={Input}
        placeholder="Your e-mail"
        validate={[required, validateEmail]}
      />
      <EntryField
        component={Select}
        name="feedbackType"
        validate={[required]}
      >
        <option disabled>Select feedback type</option>
        <option value="Feature request">Feature request</option>
        <option selected value="Bug report">Bug report</option>
        <option value="Performance">Performance</option>
        <option value="Software/Hardware Compatibility">Software/Hardware Compatibility</option>
        <option value="Data Loss">Data Loss</option>
        <option value="Other">Other</option>
      </EntryField>
      <EntryField
        component={Textarea}
        name="comments"
        placeholder="Write your comment"
      />
      <Button
        caption="Send feedback"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const FeedbackReduxForm = reduxForm({ form: 'feedback' })(FeedbackForm);

export default FeedbackReduxForm;