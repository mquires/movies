import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addPost } from '../../../../redux/users-reducer';

import Profile from '../component';

class ProfileContainer extends React.Component {
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
    userPosts: state.users.userPosts
  }
}

export default compose(
  connect(mapStateToProps, {
    addPost
  }),
  withRouter
)(ProfileContainer);