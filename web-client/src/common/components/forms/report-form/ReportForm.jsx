import React from 'react';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import { required } from '../../../../utils/validators';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import Textarea from '../../textarea';

import './report-form.scss';

const ReportForm = (props) => {
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
        component={Textarea}
        name="report"
        placeholder="Write your report"
        validate={[required]}
        className="report-form__textarea"
      />
      <Button
        caption="Send report"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const ReportReduxForm = reduxForm({ form: 'report' })(ReportForm);

export default ReportReduxForm;