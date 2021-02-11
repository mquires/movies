import React from 'react';
import { connect } from 'react-redux';
import { getPopularPersonsRequest } from '../../../../redux/persons-reducer';

import PopularPersons from '../component';

class PopularPersonsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest
    } = this.props;

    getPopularPersonsRequest();
  }

  render() {
    const {
      popularPersons
    } = this.props;

    return (
      <PopularPersons popularPersons={popularPersons} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularPersons: state.persons.popularPersons
  }
}

export default connect(mapStateToProps, { getPopularPersonsRequest })(PopularPersonsContainer);