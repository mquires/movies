import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUsersRequest } from '../../../../redux/users-reducer';
import ROUTES from '../../../constants/routes';

import AdminPanelUsersList from '../users-list';
import AdminPanelFeedback from '../feedback';

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
        <Route path={`${ROUTES.ADMIN_PANEL}/feedback`} render={() => <AdminPanelFeedback {...this.props} />} />
        <Route path={`${ROUTES.ADMIN_PANEL}/reports`} render={() => <div>reports</div>} />
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