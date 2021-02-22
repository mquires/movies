import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getPersonDetailsRequest } from '../../../../redux/persons-reducer';

import PersonDetails from '../component';

class PersonDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPersonDetailsRequest,
      match
    } = this.props;

    getPersonDetailsRequest(match.params.id);
  }

  render() {
    return (
      <PersonDetails {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personDetails: state.persons.personDetails
  }
}

export default compose(
  connect(mapStateToProps, {
    getPersonDetailsRequest
  }),
  withRouter
)(PersonDetailsContainer);