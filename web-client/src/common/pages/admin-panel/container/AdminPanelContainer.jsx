import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUsersRequest } from '../../../../redux/users-reducer';
import ROUTES from '../../../constants/routes';

import AdminPanelUsersList from '../users-list';
import AdminPanelFeedbackContainer from '../feedback/container';
import AdminPanelReportsContainer from '../reports/container';
import AdminPanelSupportContainer from '../support/container';
import AdminPanelVerificationContainer from '../verification/container';

class AdminPanelContainer extends React.Component {
  componentDidMount() {
    const {
      getUsersRequest
    } = this.props;

    getUsersRequest();
  }

  render() {
    return (
      <Switch>
        <Route exact path={ROUTES.ADMIN_PANEL} render={() => <AdminPanelUsersList {...this.props} />} />
        <Route path={`${ROUTES.ADMIN_PANEL}/feedback`} render={() => <AdminPanelFeedbackContainer {...this.props} />} />
        <Route path={`${ROUTES.ADMIN_PANEL}/reports`} render={() => <AdminPanelReportsContainer {...this.props} />} />
        <Route path={`${ROUTES.ADMIN_PANEL}/support-list`} render={() => <AdminPanelSupportContainer {...this.props} />} />
        <Route path={`${ROUTES.ADMIN_PANEL}/users-verification`} render={() => <AdminPanelVerificationContainer {...this.props} />} />
      </Switch>
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