import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setIsAuth, logoutRequest } from '../../../../redux/auth-reducer';
import ROUTES from '../../../constants/routes';

import Header from '../Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    name: state.auth.name,
    avatarImage: state.auth.avatarImage,
  }
}

class HeaderContainer extends React.Component {
  componentDidMount() {
    const {
      setIsAuth
    } = this.props;

    setIsAuth();
  }

  onLogout() {
    const {
      setIsAuth,
      history,
      logoutRequest
    } = this.props;

    logoutRequest();
    localStorage.clear();
    setIsAuth();

    history.push(ROUTES.LOGIN);
  }

  render() {
    return (
      <Header
        {...this.props}
        onLogout={this.onLogout.bind(this)}
      />
    );
  }
};

const HeaderContainerConnect = compose(
  connect(mapStateToProps, { setIsAuth, logoutRequest }),
  withRouter
)(HeaderContainer);

export default HeaderContainerConnect;