import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getTodayTrendingTVRequest } from '../../../../redux/tv-reducer';

import TV from '../component';

class TVContainer extends React.Component {
  componentDidMount() {
    const {
      getTodayTrendingTVRequest
    } = this.props;

    getTodayTrendingTVRequest(1);
  }

  render() {
    const {
      todayTrendingTV
    } = this.props;

    return (
      <TV todayTrendingTV={todayTrendingTV} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todayTrendingTV: state.tv.todayTrendingTV
  }
}

export default compose(
  connect(mapStateToProps,
    { getTodayTrendingTVRequest }),
  withRouter
)(TVContainer);