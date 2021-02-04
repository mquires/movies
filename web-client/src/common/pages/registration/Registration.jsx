import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as axios from 'axios';

import AuthComponent from '../../components/auth-component';
import RegistrationForm from '../../components/forms/registration-form';

const Registration = () => {
  const onSubmit = (formData) => {
    const {
      name,
      email,
      password
    } = formData;

    console.log(email, password);

    axios.post('http://localhost:3500/api/auth/signup', { name, email, password })
      .then(response => {
        localStorage.setItem('token', response.data.values.token);
      });
  }

  return (
    <AuthComponent
      className="registration"
      title="Registration"
    >
      <RegistrationForm onSubmit={onSubmit} />
    </AuthComponent>
  );
};

export default Registration;