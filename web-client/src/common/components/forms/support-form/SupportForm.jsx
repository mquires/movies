import React from 'react';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import { required } from '../../../../utils/validators';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import Textarea from '../../textarea';

const SupportForm = (props) => {
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
        name={"problem"}
        component={Input}
        placeholder="Describe the problem"
        validate={[required]}
      />
      <EntryField
        component={Textarea}
        name="details"
        placeholder="Give us the details"
      />
      <Button
        caption="Send"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const SupportReduxForm = reduxForm({ form: 'support' })(SupportForm);

export default SupportReduxForm;