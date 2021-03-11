import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { reset } from "redux-form";
import { getUserDataRequest } from '../../../../redux/users-reducer';

import noAvatar from '../../../../assets/images/no-avatar.jpg';

import CinemaComments from '../component';

class CinemaCommentsContainer extends React.Component {
  componentDidMount() {
    const {
      getUserDataRequest
    } = this.props;

    getUserDataRequest(localStorage.getItem('id'));
  }

  onSendComment(cinemaComments, dispatch) {
    const {
      onSendMovieComment,
      userData
    } = this.props;

    const userName = userData?.map((userDataItem) => userDataItem.name);
    const userId = userData?.map((userDataItem) => userDataItem.id);
    const avatarImage = userData?.map((userDataItem) => userDataItem.avatarImage);

    onSendMovieComment(userId[0], cinemaComments.cinemaComment, userName[0], !avatarImage[0] ? noAvatar : avatarImage[0]);

    dispatch(reset("cinemaComments"));
  }

  render() {
    return (
      <CinemaComments
        {...this.props}
        onSendComment={this.onSendComment.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieComments: state.movies.movieComments,
    movieComments: state.movies.movieComments,
    oldMovieComments: state.movies.oldMovieComments,
    userData: state.users.userData
  }
}

export default compose(
  connect(mapStateToProps, {
    getUserDataRequest
  }),
  withRouter
)(CinemaCommentsContainer);