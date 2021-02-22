import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUsersRequest } from '../../../../redux/users-reducer';

import AdminPanel from '../component';

class AdminPanelContainer extends React.Component {
  componentDidMount() {
    const {
      getUsersRequest
    } = this.props;

    getUsersRequest();
  }

  render() {
    return (
      <AdminPanel {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

export default compose(
  connect(mapStateToProps, {
    getUsersRequest
  }),
  withRouter
)(AdminPanelContainer);