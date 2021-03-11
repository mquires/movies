import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';
import { required } from '../../../../utils/validators';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import Textarea from '../../textarea';

import './cinema-comments-form.scss';

const CinemaCommentsForm = (props) => {
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
        name="cinemaComment"
        placeholder="Add a public comment..."
        validate={[required]}
        className="cinema-comments-form__textarea"
      />
      <Button
        className="cinema-comments-form__button"
        caption="Comment"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const CinemaCommentsReduxForm = reduxForm({ form: 'cinemaComments' })(CinemaCommentsForm);

export default CinemaCommentsReduxForm;