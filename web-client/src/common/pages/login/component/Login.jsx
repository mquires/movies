import React from 'react';
import PropTypes from 'prop-types';

import AuthComponent from '../../../components/auth-component';
import LoginForm from '../../../components/forms/login-form';

const Login = (props) => {
  const {
    onLogin
  } = props;

  return (
    <AuthComponent
      className="login"
      title="Login"
    >
      <LoginForm onSubmit={onLogin} />
    </AuthComponent>
  );
};

export default Login;