import React from 'react';
import PropTypes from 'prop-types';

import RegistrationForm from '../../../components/forms/registration-form';
import CenteredPageComponent from '../../../components/centered-page-component';

const Registration = (props) => {
  const {
    onRegistration
  } = props;

  return (
    <CenteredPageComponent
      className="registration"
      title="Registration"
    >
      <RegistrationForm onSubmit={onRegistration} />
    </CenteredPageComponent>
  );
};

export default Registration;