import React from 'react';
import { connect } from 'react-redux';
import { getPopularPersonsRequest, findPersonRequest } from '../../../../redux/persons-reducer';

import PopularPersons from '../component';

class PopularPersonsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest
    } = this.props;

    getPopularPersonsRequest();
  }

  onFindPerson(person) {
    const {
      findPersonRequest
    } = this.props;

    findPersonRequest(person.search);
  }

  render() {
    const {
      popularPersons
    } = this.props;

    return (
      <PopularPersons
        onChange={this.onFindPerson.bind(this)}
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

export default connect(mapStateToProps, { getPopularPersonsRequest, findPersonRequest })(PopularPersonsContainer);