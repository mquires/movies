import React from "react";
import { connect } from "react-redux";
import { getAuthUserDataRequest } from '../../redux/auth-reducer';

import App from "../component";

class AppContainer extends React.Component {
  componentDidMount() {
    const {
      getAuthUserDataRequest
    } = this.props;

    getAuthUserDataRequest(localStorage.getItem('token'));
  }

  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { getAuthUserDataRequest })(AppContainer);