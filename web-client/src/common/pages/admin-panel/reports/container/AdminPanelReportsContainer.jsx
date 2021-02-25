import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllReportsRequest } from '../../../../../redux/users-reducer';

import AdminPanelReports from '../component';

class AdminPanelReportsContainer extends React.Component {
  componentDidMount() {
    const {
      getAllReportsRequest
    } = this.props;

    getAllReportsRequest();
  }

  render() {
    return (
      <AdminPanelReports {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state.users.reports
  }
}

export default compose(
  connect(mapStateToProps, {
    getAllReportsRequest
  }),
  withRouter
)(AdminPanelReportsContainer);