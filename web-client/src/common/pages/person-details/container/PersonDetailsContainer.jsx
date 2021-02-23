import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getPersonDetailsRequest,
  getPersonMovieCreditsRequest
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

  render() {
    return (
      <PersonDetails {...this.props} />
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
    getPersonMovieCreditsRequest
  }),
  withRouter
)(PersonDetailsContainer);