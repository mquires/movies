import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BUTTON_TYPES from '../../constants/button-types';

import PageComponent from '../../components/page-component';
import Input from '../../components/input';
import Button from '../../components/button';

import './login.scss';

const Login = () => {
  return (
    <PageComponent
      className="login"
      title="Login"
    >
      <form className="form">
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Button
          caption="Submit"
          type={BUTTON_TYPES.SUBMIT}
        />
      </form>
    </PageComponent>
  );
};

export default Login;