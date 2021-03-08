import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getPersonDetailsRequest,
  getPersonMovieCreditsRequest,
  sendFavoritePersonRequest
} from '../../../../redux/persons-reducer';

import PersonDetails from '../component';

class PersonDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPersonDetailsRequest,
      getPersonMovieCreditsRequest,
      match
    } = this.props;

    getPersonDetailsRequest(match.params.id);
    getPersonMovieCreditsRequest(match.params.id);
  }

  onSendFavoritePerson(userId, personId) {
    const {
      sendFavoritePersonRequest
    } = this.props;

    sendFavoritePersonRequest(userId, personId);
  }

  render() {
    return (
      <PersonDetails {...this.props} onSendFavoritePerson={this.onSendFavoritePerson.bind(this)} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personDetails: state.persons.personDetails,
    personMovieCredits: state.persons.personMovieCredits
  }
}

export default compose(
  connect(mapStateToProps, {
    getPersonDetailsRequest,
    getPersonMovieCreditsRequest,
    sendFavoritePersonRequest
  }),
  withRouter
)(PersonDetailsContainer);