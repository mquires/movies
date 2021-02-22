import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addPost, getUserByIdRequest } from '../../../../redux/users-reducer';

import Profile from '../component';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {
      getUserByIdRequest,
      match
    } = this.props;

    getUserByIdRequest(match.params.id);
  }

  onSendPost(comment) {
    const {
      addPost
    } = this.props;

    addPost(comment.comment);
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
    addPost,
    getUserByIdRequest
  }),
  withRouter
)(ProfileContainer);