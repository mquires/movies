import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllUsersVerificationApplicationsRequest } from '../../../../../redux/users-reducer';

import AdminPanelVerification from '../component';

class AdminPanelVerificationContainer extends React.Component {
  componentDidMount() {
    const {
      getAllUsersVerificationApplicationsRequest
    } = this.props;

    getAllUsersVerificationApplicationsRequest();
  }

  render() {
    return (
      <AdminPanelVerification {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUsersVerificationApplications: state.users.allUsersVerificationApplications
  }
}

export default compose(
  connect(mapStateToProps, {
    getAllUsersVerificationApplicationsRequest
  }),
  withRouter
)(AdminPanelVerificationContainer);