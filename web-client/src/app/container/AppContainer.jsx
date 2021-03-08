import React from "react";
import { connect } from "react-redux";

import App from "../component";

class AppContainer extends React.Component {
  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {})(AppContainer);