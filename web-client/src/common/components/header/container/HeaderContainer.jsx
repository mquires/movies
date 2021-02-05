import React from 'react';
import { connect } from 'react-redux';
import { setIsAuth } from '../../../../redux/auth-reducer';

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
      setIsAuth
    } = this.props;

    localStorage.removeItem('token');

    setIsAuth();
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

const HeaderContainerConnect = connect(mapStateToProps, { setIsAuth })(HeaderContainer);

export default HeaderContainerConnect;