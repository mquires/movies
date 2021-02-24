import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getUserByIdRequest,
  getPostsByIdRequest,
  addPostRequest
} from '../../../../redux/users-reducer';
import ROUTES from '../../../constants/routes';

import Profile from '../component';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {
      getUserByIdRequest,
      getPostsByIdRequest,
      match,
      history
    } = this.props;

    if (!match.params.id) {
      match.params.id = localStorage.getItem('id');
      if (!match.params.id) {
        history.push(ROUTES.LOGIN);
      }
    }

    getUserByIdRequest(match.params.id);
    getPostsByIdRequest(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const {
        getUserByIdRequest,
        match,
        history
      } = this.props;

      if (!match.params.id) {
        match.params.id = localStorage.getItem('id');
        if (!match.params.id) {
          history.push(ROUTES.LOGIN);
        }
      }

      getUserByIdRequest(match.params.id);
    }
  }

  onSendPost(comment) {
    const {
      addPostRequest,
      match
    } = this.props;

    addPostRequest(match.params.id, comment.comment);
  }

  render() {
    return (
      <Profile
        {...this.props}
        onSendPost={this.onSendPost.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPosts: state.users.userPosts,
    user: state.users.user
  }
}

export default compose(
  connect(mapStateToProps, {
    getUserByIdRequest,
    getPostsByIdRequest,
    addPostRequest
  }),
  withRouter
)(ProfileContainer);