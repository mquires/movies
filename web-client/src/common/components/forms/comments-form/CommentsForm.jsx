import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';

import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import Textarea from '../../textarea';

import './comments-form.scss';

const CommentsForm = (props) => {
  const {
    className,
    handleSubmit,
    placeholder
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("form comments-form", className)}
    >
      <EntryField
        name={"comment"}
        component={Textarea}
        placeholder={placeholder}
      />
      <Button
        className="comments-form__button"
        caption="Send"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const CommentsReduxForm = reduxForm({ form: 'comment' })(CommentsForm);

export default CommentsReduxForm;