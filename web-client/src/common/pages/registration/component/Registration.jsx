import React from 'react';
import PropTypes from 'prop-types';

import AuthComponent from '../../../components/auth-component';
import RegistrationForm from '../../../components/forms/registration-form';

const Registration = (props) => {
  const {
    onRegistration
  } = props;

  return (
    <AuthComponent
      className="registration"
      title="Registration"
    >
      <RegistrationForm onSubmit={onRegistration} />
    </AuthComponent>
  );
};

export default Registration;