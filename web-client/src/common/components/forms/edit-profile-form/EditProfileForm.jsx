import React, { useState } from 'react';
import classNames from 'classnames';
import { reduxForm } from 'redux-form';
import BUTTON_TYPES from '../../../constants/button-types';

import Input from '../../input';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import Textarea from '../../textarea';
import Icon from '../../icon';
import Select from '../../select';
import DangerousPopup from '../../popups/dangerous-popup';
import VerificationFirstStep from '../../popups/verification-popups/verification-first-step';
import VerificationThirdStepContainer from '../../popups/verification-popups/verification-third-step/container';
import VerificationSecondStepContainer from '../../popups/verification-popups/verification-second-step/container';
import VerificationFourthStepContainer from '../../popups/verification-popups/verification-fourth-step/container';
import VerificationFifthStep from '../../popups/verification-popups/verification-fifth-step';

import proAccIcon from '../../../../assets/icons/switch_account.svg';

import './edit-profile-form.scss';

const EditProfileForm = (props) => {
  const {
    className,
    handleSubmit,
    onDeleteUser
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const [isOpenFirstStep, setIsOpenFirstStep] = useState(false);
  const toggleFirstStep = () => setIsOpenFirstStep(true);
  const closeFirstStep = () => setIsOpenFirstStep(false);

  const [isOpenSecondStep, setIsOpenSecondStep] = useState(false);
  const toggleSecondStep = () => {
    setIsOpenSecondStep(true);
    setIsOpenFirstStep(false);
  }
  const closeSecondStep = () => setIsOpenSecondStep(false);

  const [isOpenThirdStep, setIsOpenThirdStep] = useState(false);
  const toggleThirdStep = () => {
    setIsOpenThirdStep(true);
    setIsOpenSecondStep(false);
  }
  const closeThirdStep = () => setIsOpenThirdStep(false);

  const [isOpenFourthStep, setIsOpenFourthStep] = useState(false);
  const toggleFourthStep = () => {
    setIsOpenFourthStep(true);
    setIsOpenThirdStep(false);
  }
  const closeFourthStep = () => setIsOpenFourthStep(false);

  const [isOpenFifthStep, setIsOpenFifthStep] = useState(false);
  const toggleFifthStep = () => {
    setIsOpenFifthStep(true);
    setIsOpenFourthStep(false);
  }
  const closeFifthStep = () => setIsOpenFifthStep(false);

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("form", className)}
    >
      {
        isOpen &&
        <DangerousPopup
          open={toggleMenu}
          onRequestClose={closeMenu}
          cancelClick={closeMenu}
          onDeleteUser={onDeleteUser}
        />
      }
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
      />
      <EntryField
        component={Select}
        name="gender"
        className="edit-profile-form__input"
      >
        <option disabled>Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </EntryField>
      {
        isOpenFirstStep &&
        <VerificationFirstStep
          open={toggleFirstStep}
          onRequestClose={closeFirstStep}
          toggleSecondStep={toggleSecondStep}
        />
      }
      {
        isOpenSecondStep &&
        <VerificationSecondStepContainer
          open={toggleSecondStep}
          onRequestClose={closeSecondStep}
          toggleThirdStep={toggleThirdStep}
        />
      }
      {
        isOpenThirdStep &&
        <VerificationThirdStepContainer
          open={toggleThirdStep}
          onRequestClose={closeThirdStep}
          toggleFourthStep={toggleFourthStep}
        />
      }
      {
        isOpenFourthStep &&
        <VerificationFourthStepContainer
          open={toggleFourthStep}
          onRequestClose={closeFourthStep}
          toggleFifthStep={toggleFifthStep}
        />
      }
      {
        isOpenFifthStep &&
        <VerificationFifthStep
          open={toggleFifthStep}
          onRequestClose={closeFifthStep}
        />
      }
      <div
        className="edit-profile-form__switch"
        onClick={toggleFirstStep}
      >
        <Icon
          glyph={proAccIcon.id}
          viewBox={proAccIcon.viewBox}
          className="edit-profile-form__switch-icon"
        />
        Switch to Pro Account
      </div>
      <div className="edit-profile-form__row-container">
        <Button
          className="edit-profile-form__button"
          caption="Submit"
          type={BUTTON_TYPES.SUBMIT}
        />
        <div
          onClick={toggleMenu}
          className="edit-profile-form__link"
        >
          Delete your personal account
      </div>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'editProfile' })(EditProfileForm);