import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getWatchLaterTVRequest } from '../../../../../redux/watch-later-reducer';

import WatchLaterTV from '../component';

class WatchLaterTVContainer extends React.Component {
  componentDidMount() {
    const {
      getWatchLaterTVRequest,
      match,
      history
    } = this.props;

    if (!match.params.id) {
      match.params.id = localStorage.getItem('id');
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
    watchLaterTV: state.watchLater.watchLaterTV
  }
}

export default compose(
  connect(mapStateToProps,
    { getWatchLaterTVRequest }),
  withRouter
)(WatchLaterTVContainer);