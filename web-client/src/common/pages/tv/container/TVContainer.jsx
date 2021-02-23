import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getTodayTrendingTVRequest,
  getGenresRequest
} from '../../../../redux/tv-reducer';

import TV from '../component';

class TVContainer extends React.Component {
  componentDidMount() {
    const {
      getTodayTrendingTVRequest,
      getGenresRequest
    } = this.props;

    getTodayTrendingTVRequest(1);
    getGenresRequest();
  }

  render() {
    return (
      <TV {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todayTrendingTV: state.tv.todayTrendingTV,
    genres: state.tv.genres
  }
}

export default compose(
  connect(mapStateToProps,
    {
      getTodayTrendingTVRequest,
      getGenresRequest
    }),
  withRouter
)(TVContainer);