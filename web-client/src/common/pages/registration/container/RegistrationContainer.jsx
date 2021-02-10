import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import { signupUser } from '../../../../redux/auth-reducer';

import Registration from '../component';

class RegistrationContainer extends React.Component {

  onRegistration(formData) {
    const {
      name,
      email,
      password,
      confirmPassword
    } = formData;

    const {
      signupUser
    } = this.props;
    
    
    console.log(password)
    
    console.log(confirmPassword)


    signupUser(name, email, password, confirmPassword);
  }

  render() {
    return (
      <Registration onRegistration={this.onRegistration.bind(this)} />
    );
  }
};

const RegistrationContainerCompose = compose(
  connect(null, { signupUser }),
  withAuthRedirect
)(RegistrationContainer);

export default RegistrationContainerCompose;