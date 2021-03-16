import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import ROUTES from '../../../constants/routes';
import {
  sendAdditionalUserDataRequest,
  getAdditionalUserDataRequest,
  deleteUserRequest,
  setVerificationUserData
} from '../../../../redux/users-reducer';
import { logoutRequest, setIsAuth } from '../../../../redux/auth-reducer';

import EditProfile from '../edit-profile';

class SettingsContainer extends React.Component {
  componentDidMount() {
    const {
      getAdditionalUserDataRequest,
      userId
    } = this.props;

    getAdditionalUserDataRequest(userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      const {
        getAdditionalUserDataRequest,
        userId
      } = this.props;

      getAdditionalUserDataRequest(userId);
    }
  }

  onSendEditProfile(editProfile) {
    const {
      sendAdditionalUserDataRequest,
      userId
    } = this.props;

    const {
      bio,
      gender,
      nickname,
      phone,
      website
    } = editProfile;

    sendAdditionalUserDataRequest(userId, bio, gender, nickname, phone, website);
  }

  onDeleteUser() {
    const {
      deleteUserRequest,
      setIsAuth,
      history,
      logoutRequest
    } = this.props;

    deleteUserRequest(localStorage.getItem('token'));
    logoutRequest();
    localStorage.clear();
    setIsAuth();

    history.push(ROUTES.LOGIN);
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path={ROUTES.SETTINGS}
          render={() => <EditProfile
            {...this.props}
            onSendEditProfile={this.onSendEditProfile.bind(this)}
            onDeleteUser={this.onDeleteUser.bind(this)}
          />
          }
        />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    successSending: state.users.successSending,
    name: state.auth.name,
    additionalUserData: state.users.additionalUserData
  }
}

export default compose(
  connect(mapStateToProps, {
    sendAdditionalUserDataRequest,
    getAdditionalUserDataRequest,
    deleteUserRequest,
    logoutRequest,
    setIsAuth,
    setVerificationUserData
  }),
  withRouter
)(SettingsContainer);