import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import withAuthRedirect from '../../../../hoc/withAuthRedirect';

import Header from '../Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

class HeaderContainer extends React.Component {
  onLogout() {
    localStorage.removeItem('token');
  }

  render() {
    const {
      isAuth
    } = this.props;

    return (
      <Header isAuth={isAuth} onLogout={this.onLogout.bind(this)} />
    );
  }
};

const HeaderContainerCompose = compose(
  connect(mapStateToProps, {}),
  withRouter
)(HeaderContainer);

export default HeaderContainerCompose;