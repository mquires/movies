import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';

import AuthComponent from '../../components/auth-component';
import LoginForm from '../../components/forms/login-form';

const Login = () => {
  const onSubmit = (formData) => {
    const {
      email,
      password
    } = formData;

    console.log(email, password);

    axios.post('http://localhost:3500/api/auth/signin', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.values.token);
      });
  }

  return (
    <AuthComponent
      className="login"
      title="Login"
    >
      <LoginForm onSubmit={onSubmit} />
    </AuthComponent>
  );
};

export default Login;