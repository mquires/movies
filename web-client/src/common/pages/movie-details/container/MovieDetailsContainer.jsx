import React from 'react';
import { connect } from 'react-redux';
import { getPopularPersonsRequest } from '../../../../redux/persons-reducer';

import MovieDetails from '../component';

class MovieDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest
    } = this.props;

    getPopularPersonsRequest(1);
  }

  render() {
    const {
      popularPersons
    } = this.props;

    return (
      <MovieDetails
      popularPersons={popularPersons}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularPersons: state.persons.popularPersons
  }
}

export default connect(mapStateToProps,
  {
    getPopularPersonsRequest
  })(MovieDetailsContainer);