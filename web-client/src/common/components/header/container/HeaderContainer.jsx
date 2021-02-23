import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setIsAuth } from '../../../../redux/auth-reducer';
import ROUTES from '../../../constants/routes';

import Header from '../Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
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
      history
    } = this.props;

    localStorage.removeItem('token');

    setIsAuth(null, localStorage.removeItem('id'));

    history.push(ROUTES.LOGIN);
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

const HeaderContainerConnect = compose(
  connect(mapStateToProps, { setIsAuth }),
  withRouter
)(HeaderContainer);

export default HeaderContainerConnect;