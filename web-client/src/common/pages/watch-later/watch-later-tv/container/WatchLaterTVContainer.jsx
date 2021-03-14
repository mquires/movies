import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getWatchLaterTVRequest } from '../../../../../redux/watch-later-reducer';
import ROUTES from '../../../../constants/routes';

import WatchLaterTV from '../component';

class WatchLaterTVContainer extends React.Component {
  componentDidMount() {
    const {
      getWatchLaterTVRequest,
      match,
      history,
      userId
    } = this.props;

    if (!match.params.id) {
      match.params.id = userId;
      if (!match.params.id) {
        history.push(ROUTES.LOGIN);
      }
    }

    getWatchLaterTVRequest(match.params.id);
  }

  render() {
    return (
      <WatchLaterTV {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    watchLaterTV: state.watchLater.watchLaterTV,
    userId: state.auth.userId
  }
}

export default compose(
  connect(mapStateToProps,
    { getWatchLaterTVRequest }),
  withRouter
)(WatchLaterTVContainer);