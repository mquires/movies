import React from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import BUTTON_TYPES from '../../../constants/button-types';
import { required } from '../../../../utils/validators';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import Textarea from '../../textarea';
import Icon from '../../icon';
import Select from '../../select';

import proAccIcon from '../../../../assets/icons/switch_account.svg';

import './edit-profile-form.scss';

const EditProfileForm = (props) => {
  const {
    className,
    handleSubmit,
    nickname,
    website,
    bio,
    phone,
    gender
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("form", className)}
    >
      <EntryField
        className="edit-profile-form__input"
        component={Input}
        name="nickname"
        placeholder="Write your nickname..."
      />
      <p className="edit-profile-form__text">Help people discover your account by using the name you're known by:
      either your full name, nickname, or business name.</p>
      <EntryField
        className="edit-profile-form__input"
        component={Input}
        name="website"
        placeholder="Website"
      />
      <EntryField
        className="edit-profile-form__input"
        component={Textarea}
        name="bio"
        placeholder="Bio"
      />
      <h3 className="edit-profile-form__title">Personal Information</h3>
      <p className="edit-profile-form__text">Provide your personal information, even if the account is used for a business,
        a pet or something else. This won't be a part of your public profile.</p>
      <EntryField
        className="edit-profile-form__input"
        component={Input}
        name="phone"
        placeholder="Phone number"
        value="1123213123213"
      />
      <EntryField
        component={Select}
        name="gender"
        className="edit-profile-form__input"
      >
        <option disabled>Select gender</option>
        <option value="Male">Male</option>
        <option selected value="Female">Female</option>
      </EntryField>
      <NavLink
        className="edit-profile-form__switch"
        to="#"
      >
        <Icon
          glyph={proAccIcon.id}
          viewBox={proAccIcon.viewBox}
          className="edit-profile-form__switch-icon"
        />
        Switch to Pro Account
      </NavLink>
      <div className="edit-profile-form__row-container">
        <Button
          className="edit-profile-form__button"
          caption="Submit"
          type={BUTTON_TYPES.SUBMIT}
        />
        <NavLink
          to="#"
          className="edit-profile-form__link"
        >
          Delete your personal account
      </NavLink>
      </div>
    </form>
  );
};

const EditProfileReduxForm = reduxForm({
  form: 'editProfile',
  initialValues: {
    nickname: props.nickname,
    website: props.website,
    bio: props.bio,
    phone: props.phone,
    gender: props.gender
  }
})(EditProfileForm);

export default EditProfileReduxForm;