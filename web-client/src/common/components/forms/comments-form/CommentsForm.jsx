import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import INPUT_TYPES from '../../../constants/input-types';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';

import './comments-form.scss';
import Textarea from '../../textarea/Textarea';

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