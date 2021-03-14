import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getUserByIdRequest,
  getPostsByIdRequest,
  addPostRequest,
  addReportRequest
} from '../../../../redux/users-reducer';
import { getFavoritePersonRequest } from '../../../../redux/persons-reducer';
import { getFavoriteMovieRequest } from '../../../../redux/movies-reducer';
import { getFavoriteSerialRequest } from '../../../../redux/tv-reducer';
import ROUTES from '../../../constants/routes';
import { reset } from "redux-form";

import Profile from '../component';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {
      getUserByIdRequest,
      getPostsByIdRequest,
      getFavoritePersonRequest,
      getFavoriteMovieRequest,
      getFavoriteSerialRequest,
      match,
      history
    } = this.props;

    if (!match.params.id) {
      match.params.id = this.props.userId;
      if (!match.params.id) {
        history.push(ROUTES.LOGIN);
      }
    }

    getUserByIdRequest(match.params.id);
    getPostsByIdRequest(match.params.id);
    getFavoritePersonRequest(match.params.id);
    getFavoriteMovieRequest(match.params.id);
    getFavoriteSerialRequest(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const {
        getUserByIdRequest,
        getPostsByIdRequest,
        getFavoritePersonRequest,
        getFavoriteMovieRequest,
        getFavoriteSerialRequest,
        match,
        history
      } = this.props;

      if (!match.params.id) {
        match.params.id = this.props.userId;
        if (!match.params.id) {
          history.push(ROUTES.LOGIN);
        }
      }

      getUserByIdRequest(match.params.id);
      getPostsByIdRequest(match.params.id);
      getFavoritePersonRequest(match.params.id);
      getFavoriteMovieRequest(match.params.id);
      getFavoriteSerialRequest(match.params.id);
    }
  }

  onSendPost(comment, dispatch) {
    const {
      addPostRequest,
      match
    } = this.props;

    addPostRequest(match.params.id, comment.comment);
    dispatch(reset("comment"));
  }

  onSendReport(report, dispatch) {
    const {
      addReportRequest,
      match
    } = this.props;

    addReportRequest(match.params.id, report.report, report.name);
    dispatch(reset("report"));
  }

  render() {
    return (
      <Profile
        {...this.props}
        onSendPost={this.onSendPost.bind(this)}
        onSendReport={this.onSendReport.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPosts: state.users.userPosts,
    user: state.users.user,
    favoritePerson: state.persons.favoritePerson,
    favoriteMovie: state.movies.favoriteMovie,
    successSending: state.users.successSending,
    favoriteSerial: state.tv.favoriteSerial,
    userId: state.auth.userId
  }
}

export default compose(
  connect(mapStateToProps, {
    getUserByIdRequest,
    getPostsByIdRequest,
    addPostRequest,
    addReportRequest,
    getFavoritePersonRequest,
    getFavoriteMovieRequest,
    getFavoriteSerialRequest
  }),
  withRouter
)(ProfileContainer);