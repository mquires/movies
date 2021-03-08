import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getTodayTrendingTVRequest,
  getGenresRequest
} from '../../../../redux/tv-reducer';

import { sendWatchLaterTVRequest } from '../../../../redux/watch-later-reducer';

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

  onSendTVDetails(userId, tvId) {
    const {
      sendWatchLaterTVRequest
    } = this.props;

    sendWatchLaterTVRequest(userId, tvId);
  }

  render() {
    return (
      <TV {...this.props} onSendTVDetails={this.onSendTVDetails.bind(this)} />
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
      getGenresRequest,
      sendWatchLaterTVRequest
    }),
  withRouter
)(TVContainer);